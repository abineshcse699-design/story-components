import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Toggle } from './toggle';
import { ToggleOption } from '../../models';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { ComponentRef } from '@angular/core';
import { vi } from 'vitest';

describe('Toggle', () => {
  let component: Toggle;
  let componentRef: ComponentRef<Toggle>;
  let fixture: ComponentFixture<Toggle>;

  const mockOptions: ToggleOption[] = [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
    { label: 'Option 3', value: 'opt3' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toggle]
    }).compileComponents();

    fixture = TestBed.createComponent(Toggle);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Inputs', () => {
    it('should have default ariaLabel', () => {
      expect(component.ariaLabel()).toBe('Toggle options');
    });

    it('should accept custom ariaLabel', () => {
      componentRef.setInput('ariaLabel', 'Custom label');
      expect(component.ariaLabel()).toBe('Custom label');
    });

    it('should have default name', () => {
      expect(component.name()).toBe('toggle-group');
    });

    it('should accept custom name', () => {
      componentRef.setInput('name', 'custom-toggle');
      expect(component.name()).toBe('custom-toggle');
    });

    it('should have null as default value', () => {
      expect(component.value()).toBeNull();
    });

    it('should accept string value', () => {
      componentRef.setInput('value', 'test-value');
      expect(component.value()).toBe('test-value');
    });

    it('should accept numeric value', () => {
      componentRef.setInput('value', 42);
      expect(component.value()).toBe(42);
    });

    it('should accept boolean value', () => {
      componentRef.setInput('value', true);
      expect(component.value()).toBe(true);
    });

    it('should accept options array', () => {
      componentRef.setInput('options', mockOptions);
      expect(component.options()).toEqual(mockOptions);
    });
  });

  describe('currentValue computed', () => {
    it('should return value input when provided', () => {
      componentRef.setInput('value', 'explicit-value');
      componentRef.setInput('options', mockOptions);
      expect(component['currentValue']()).toBe('explicit-value');
    });

    it('should return active option value when value input is null', () => {
      const optionsWithActive: ToggleOption[] = [
        { label: 'Option 1', value: 'opt1' },
        { label: 'Option 2', value: 'opt2', active: true },
        { label: 'Option 3', value: 'opt3' }
      ];
      componentRef.setInput('options', optionsWithActive);
      expect(component['currentValue']()).toBe('opt2');
    });

    it('should return null when no value and no active option', () => {
      componentRef.setInput('options', mockOptions);
      expect(component['currentValue']()).toBeNull();
    });

    it('should prioritize value input over active option', () => {
      const optionsWithActive: ToggleOption[] = [
        { label: 'Option 1', value: 'opt1' },
        { label: 'Option 2', value: 'opt2', active: true },
        { label: 'Option 3', value: 'opt3' }
      ];
      componentRef.setInput('value', 'opt3');
      componentRef.setInput('options', optionsWithActive);
      expect(component['currentValue']()).toBe('opt3');
    });

    it('should handle multiple active options by selecting first', () => {
      const optionsWithMultipleActive: ToggleOption[] = [
        { label: 'Option 1', value: 'opt1', active: true },
        { label: 'Option 2', value: 'opt2', active: true },
        { label: 'Option 3', value: 'opt3' }
      ];
      componentRef.setInput('options', optionsWithMultipleActive);
      expect(component['currentValue']()).toBe('opt1');
    });
  });

  describe('onChange', () => {
    it('should emit change event with selected option', () => {
      const changeSpy = vi.fn();
      component.change.subscribe(changeSpy);

      componentRef.setInput('options', mockOptions);

      const mockEvent = {
        value: 'opt2'
      } as MatButtonToggleChange;

      component.onChange(mockEvent);

      expect(changeSpy).toHaveBeenCalledTimes(1);
      expect(changeSpy).toHaveBeenCalledWith([mockOptions[1]]);
    });

    it('should emit empty array when value not found in options', () => {
      const changeSpy = vi.fn();
      component.change.subscribe(changeSpy);

      componentRef.setInput('options', mockOptions);

      const mockEvent = {
        value: 'non-existent'
      } as MatButtonToggleChange;

      component.onChange(mockEvent);

      expect(changeSpy).toHaveBeenCalledTimes(1);
      expect(changeSpy).toHaveBeenCalledWith([]);
    });

    it('should emit empty array when options is undefined', () => {
      const changeSpy = vi.fn();
      component.change.subscribe(changeSpy);

      const mockEvent = {
        value: 'opt1'
      } as MatButtonToggleChange;

      component.onChange(mockEvent);

      expect(changeSpy).toHaveBeenCalledTimes(1);
      expect(changeSpy).toHaveBeenCalledWith([]);
    });

    it('should handle numeric values in onChange', () => {
      const changeSpy = vi.fn();
      component.change.subscribe(changeSpy);

      const numericOptions: ToggleOption[] = [
        { label: 'One', value: 1 },
        { label: 'Two', value: 2 },
        { label: 'Three', value: 3 }
      ];

      componentRef.setInput('options', numericOptions);

      const mockEvent = {
        value: 2
      } as MatButtonToggleChange;

      component.onChange(mockEvent);

      expect(changeSpy).toHaveBeenCalledWith([numericOptions[1]]);
    });

    it('should handle boolean values in onChange', () => {
      const changeSpy = vi.fn();
      component.change.subscribe(changeSpy);

      const booleanOptions: ToggleOption[] = [
        { label: 'On', value: true },
        { label: 'Off', value: false }
      ];

      componentRef.setInput('options', booleanOptions);

      const mockEvent = {
        value: true
      } as MatButtonToggleChange;

      component.onChange(mockEvent);

      expect(changeSpy).toHaveBeenCalledWith([booleanOptions[0]]);
    });
  });

  describe('Template Integration', () => {
    it('should render mat-button-toggle-group', async () => {
      componentRef.setInput('options', mockOptions);
      fixture.detectChanges();
      await fixture.whenStable();

      const toggleGroup = fixture.nativeElement.querySelector('mat-button-toggle-group');
      expect(toggleGroup).toBeTruthy();
    });

    it('should render correct number of toggle buttons', async () => {
      componentRef.setInput('options', mockOptions);
      fixture.detectChanges();
      await fixture.whenStable();

      const toggleButtons = fixture.nativeElement.querySelectorAll('mat-button-toggle');
      expect(toggleButtons.length).toBe(mockOptions.length);
    });

    it('should set aria-label attribute', async () => {
      componentRef.setInput('ariaLabel', 'Test Label');
      componentRef.setInput('options', mockOptions);
      fixture.detectChanges();
      await fixture.whenStable();

      const toggleGroup = fixture.nativeElement.querySelector('mat-button-toggle-group');
      expect(toggleGroup.getAttribute('aria-label')).toBe('Test Label');
    });

    it('should bind name to template', async () => {
      componentRef.setInput('name', 'test-toggle');
      componentRef.setInput('options', mockOptions);
      fixture.detectChanges();
      await fixture.whenStable();

      // The name is bound via property binding, so we verify the component has it
      expect(component.name()).toBe('test-toggle');
    });

    it('should display correct labels', async () => {
      componentRef.setInput('options', mockOptions);
      fixture.detectChanges();
      await fixture.whenStable();

      const toggleButtons = fixture.nativeElement.querySelectorAll('mat-button-toggle');
      toggleButtons.forEach((button: HTMLElement, index: number) => {
        expect(button.textContent?.trim()).toBe(mockOptions[index].label);
      });
    });

    it('should mark correct button as checked based on value', async () => {
      componentRef.setInput('value', 'opt2');
      componentRef.setInput('options', mockOptions);
      fixture.detectChanges();
      await fixture.whenStable();

      const toggleButtons = fixture.nativeElement.querySelectorAll('mat-button-toggle');
      const checkedButton = toggleButtons[1];
      expect(checkedButton.classList.contains('mat-button-toggle-checked')).toBe(true);
    });

    it('should mark correct button as checked based on active option', async () => {
      const optionsWithActive: ToggleOption[] = [
        { label: 'Option 1', value: 'opt1' },
        { label: 'Option 2', value: 'opt2', active: true },
        { label: 'Option 3', value: 'opt3' }
      ];
      componentRef.setInput('options', optionsWithActive);
      fixture.detectChanges();
      await fixture.whenStable();

      const toggleButtons = fixture.nativeElement.querySelectorAll('mat-button-toggle');
      const checkedButton = toggleButtons[1];
      expect(checkedButton.classList.contains('mat-button-toggle-checked')).toBe(true);
    });
  });
});
