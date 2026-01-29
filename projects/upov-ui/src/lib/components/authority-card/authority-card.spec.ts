import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityCard } from './authority-card';

describe('AuthorityCard', () => {
  let component: AuthorityCard;
  let fixture: ComponentFixture<AuthorityCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorityCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorityCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
