import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {Footer} from './footer';
import {FOOTER_CONFIG} from '../../core/footer-config.token';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    })
      .compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use default configuration from injection token', () => {
    expect(component.socialLinks()).toBeDefined();
    expect(component.socialLinks().length).toBeGreaterThan(0);
    expect(component.footerLinks()).toBeDefined();
    expect(component.footerLinks().length).toBeGreaterThan(0);
  });

  it('should use custom configuration when provided', async () => {
    const customConfig = {
      socialLinks: [{name: 'Test Social', url: '/test-social', icon: 'test'}],
      footerLinks: [{name: 'Test Link', url: '/test-link'}],
    };

    await TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [
        {provide: FOOTER_CONFIG, useValue: customConfig},
      ],
    }).compileComponents();

    const customFixture = TestBed.createComponent(Footer);
    const customComponent = customFixture.componentInstance;

    expect(customComponent.socialLinks()).toEqual(customConfig.socialLinks);
    expect(customComponent.footerLinks()).toEqual(customConfig.footerLinks);
  });
});
