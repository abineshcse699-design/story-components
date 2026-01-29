import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteList } from './autocomplete-list';

describe('AutocompleteList', () => {
  let component: AutocompleteList;
  let fixture: ComponentFixture<AutocompleteList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
