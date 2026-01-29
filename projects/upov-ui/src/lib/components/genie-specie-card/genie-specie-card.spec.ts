import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenieSpecieCard } from './genie-specie-card';

describe('GenieSpecieCard', () => {
  let component: GenieSpecieCard;
  let fixture: ComponentFixture<GenieSpecieCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenieSpecieCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenieSpecieCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
