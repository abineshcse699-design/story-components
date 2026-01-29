import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenieSearch } from './genie-search';

describe('GenieSearch', () => {
  let component: GenieSearch;
  let fixture: ComponentFixture<GenieSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenieSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenieSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
