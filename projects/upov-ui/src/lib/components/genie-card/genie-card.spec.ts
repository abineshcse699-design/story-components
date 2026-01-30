import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenieCard } from './genie-card';

describe('GenieCard', () => {
  let component: GenieCard;
  let fixture: ComponentFixture<GenieCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenieCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenieCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
