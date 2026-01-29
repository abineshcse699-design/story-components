import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Button } from './button';

@Component({
  selector: 'test-host',
  template: `
    <button matButton upovButton [upovButton]="variant" [size]="size">Test</button>
  `,
  standalone: true,
  imports: [Button]
})
class TestHostComponent {
  variant: 'primary' | 'secondary' | 'default' | 'danger' | '' = 'default';
  size: 'small' | 'medium' | 'large' = 'medium';
}

describe('Button Directive', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent],
    });
  });

  it('should apply default classes', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(btn.classList).toContain('upov-button');
    expect(btn.classList).toContain('upov-button--default');
    expect(btn.classList).toContain('upov-button--medium');
  });

  it('should apply primary and large classes', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.componentInstance.variant = 'primary';
    fixture.componentInstance.size = 'large';
    fixture.detectChanges();
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(btn.classList).toContain('upov-button--primary');
    expect(btn.classList).toContain('upov-button--large');
  });

  it('should apply secondary and small classes', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.componentInstance.variant = 'secondary';
    fixture.componentInstance.size = 'small';
    fixture.detectChanges();
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(btn.classList).toContain('upov-button--secondary');
    expect(btn.classList).toContain('upov-button--small');
  });

  it('should apply danger class', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.componentInstance.variant = 'danger';
    fixture.detectChanges();
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(btn.classList).toContain('upov-button--danger');
  });
});
