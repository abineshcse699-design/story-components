import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { vi, describe, it, expect, beforeEach } from 'vitest';

import { SearchInput } from './search-input';
import { AutocompleteOption } from '../../models';

describe('SearchInput', () => {
  let component: SearchInput;
  let fixture: ComponentFixture<SearchInput>;

  const mockAutocompleteOptions: AutocompleteOption[] = [
    { value: 'Apple' },
    { value: 'Banana' },
    { value: 'Orange' },
    { value: 'Grape' }
  ];

  const mockStringOptions: string[] = ['Apple', 'Banana', 'Orange', 'Grape'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SearchInput,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Input Properties', () => {
    it('should set placeholder correctly', () => {
      fixture.componentRef.setInput('placeholder', 'Custom placeholder');
      fixture.detectChanges();

      const input = fixture.debugElement.query(By.css('input'));
      expect(input.nativeElement.placeholder).toBe('Custom placeholder');
    });

    it('should handle string autocomplete options', () => {
      fixture.componentRef.setInput('autocomplete', mockStringOptions);
      fixture.detectChanges();

      expect(component.autocompleteOptions()).toEqual([
        { value: 'Apple' },
        { value: 'Banana' },
        { value: 'Orange' },
        { value: 'Grape' }
      ]);
    });

    it('should handle AutocompleteOption array', () => {
      fixture.componentRef.setInput('autocomplete', mockAutocompleteOptions);
      fixture.detectChanges();

      expect(component.autocompleteOptions()).toEqual(mockAutocompleteOptions);
    });

    it('should set clereable input correctly', () => {
      fixture.componentRef.setInput('clereable', false);
      fixture.detectChanges();

      expect(component.clereable()).toBe(false);
    });
  });

  describe('Search Functionality', () => {
    it('should emit searchValue when typing', () => {
      const searchValueSpy = vi.spyOn(component.searchValue, 'emit');

      const input = fixture.debugElement.query(By.css('input'));
      input.nativeElement.value = 'test';
      input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(searchValueSpy).toHaveBeenCalledWith('test');
    });

    it('should emit submitted when search button is clicked', () => {
      const submittedSpy = vi.spyOn(component.submitted, 'emit');
      component.searchControl.setValue('test search');
      fixture.detectChanges();

      const searchBtn = fixture.debugElement.query(By.css('button[matButton]'));
      searchBtn.nativeElement.click();
      fixture.detectChanges();

      expect(submittedSpy).toHaveBeenCalledWith('test search');
    });

    it('should emit submitted when option is selected and submitOnOptionSelect is true', () => {
      fixture.componentRef.setInput('submitOnOptionSelect', true);
      fixture.detectChanges();
      const submittedSpy = vi.spyOn(component.submitted, 'emit');
      component.searchControl.setValue('selected option');

      component.onSelect();

      expect(submittedSpy).toHaveBeenCalledWith('selected option');
    });

    it('should not emit submitted when option is selected and submitOnOptionSelect is false', () => {
      fixture.componentRef.setInput('submitOnOptionSelect', false);
      fixture.detectChanges();
      const submittedSpy = vi.spyOn(component.submitted, 'emit');

      component.onSelect();

      expect(submittedSpy).not.toHaveBeenCalled();
    });

    it('should clear search when clear button is clicked', () => {
      fixture.componentRef.setInput('clereable', true);
      fixture.detectChanges();

      // Set value both in control and by typing to trigger currentSearchValue signal
      const input = fixture.debugElement.query(By.css('input'));
      input.nativeElement.value = 'test';
      input.nativeElement.dispatchEvent(new Event('input'));
      component.searchControl.setValue('test');
      fixture.detectChanges();

      const clearBtn = fixture.debugElement.query(By.css('.clear-button'));
      expect(clearBtn).toBeTruthy(); // Verify the button exists

      clearBtn.nativeElement.click();
      fixture.detectChanges();

      expect(component.searchControl.value).toBe('');
    });

    it('should not show clear button when clereable is false', () => {
      fixture.componentRef.setInput('clereable', false);
      fixture.detectChanges();

      const input = fixture.debugElement.query(By.css('input'));
      input.nativeElement.value = 'test';
      input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const clearBtn = fixture.debugElement.query(By.css('.clear-button'));
      expect(clearBtn).toBeFalsy();
    });

    it('should not show clear button when search value is empty', () => {
      fixture.componentRef.setInput('clereable', true);
      fixture.detectChanges();

      const clearBtn = fixture.debugElement.query(By.css('.clear-button'));
      expect(clearBtn).toBeFalsy();
    });
  });

  describe('Autocomplete Filtering', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('autocomplete', mockAutocompleteOptions);
      fixture.detectChanges();
    });

    it('should filter options based on search value', () => {
      const input = fixture.debugElement.query(By.css('input'));
      input.nativeElement.value = 'ap';
      input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const filteredOptions = component.filteredOptions();
      expect(filteredOptions).toEqual([
        { value: 'Apple' },
        { value: 'Grape' }
      ]);
    });

    it('should be case insensitive when filtering', () => {
      const input = fixture.debugElement.query(By.css('input'));
      input.nativeElement.value = 'APPLE';
      input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const filteredOptions = component.filteredOptions();
      expect(filteredOptions).toEqual([{ value: 'Apple' }]);
    });

    it('should return no options when search is empty', () => {
      const input = fixture.debugElement.query(By.css('input'));
      input.nativeElement.value = '';
      input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const filteredOptions = component.filteredOptions();
      expect(filteredOptions).toEqual([]);
    });
  });

  describe('Text Highlighting', () => {
    it('should highlight matching text', () => {
      const result = component.highlightText('Apple', 'app');
      expect(result.toString()).toContain('<mark class="search-highlight">App</mark>le');
    });

    it('should be case insensitive for highlighting', () => {
      const result = component.highlightText('Apple', 'APPLE');
      expect(result.toString()).toContain('<mark class="search-highlight">Apple</mark>');
    });

    it('should return original text when no match found', () => {
      const result = component.highlightText('Apple', 'xyz');
      expect(result).toBe('Apple');
    });

    it('should handle empty search value', () => {
      const result = component.highlightText('Apple', '');
      expect(result).toBe('Apple');
    });

    it('should handle empty text', () => {
      const result = component.highlightText('', 'search');
      expect(result).toBe('');
    });
  });

  describe('Signals and Computed Values', () => {
    it('should update currentSearchValue signal when typing', () => {
      const input = fixture.debugElement.query(By.css('input'));
      input.nativeElement.value = 'test signal';
      input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(component.currentSearchValue()).toBe('test signal');
    });

    it('should compute autocomplete options from string array', () => {
      fixture.componentRef.setInput('autocomplete', ['Option1', 'Option2']);
      fixture.detectChanges();

      expect(component.autocompleteOptions()).toEqual([
        { value: 'Option1' },
        { value: 'Option2' }
      ]);
    });
  });
});
