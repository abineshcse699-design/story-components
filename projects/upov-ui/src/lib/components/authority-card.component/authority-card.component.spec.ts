import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityCardComponent } from './authority-card.component';

describe('AuthorityCardComponent', () => {
  let component: AuthorityCardComponent;
  let fixture: ComponentFixture<AuthorityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorityCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorityCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
