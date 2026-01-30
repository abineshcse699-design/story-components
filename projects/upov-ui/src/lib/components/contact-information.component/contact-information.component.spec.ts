import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformationComponent } from './contact-information.component';

describe('ContactInformationComponent', () => {
  let component: ContactInformationComponent;
  let fixture: ComponentFixture<ContactInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInformationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
