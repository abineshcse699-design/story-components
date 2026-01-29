import {booleanAttribute, Directive, input} from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'default' | 'danger' | 'accent' | '';

@Directive({
  selector: '[matButton][upovButton],[mat-button][upovButton],[matIconButton][upovButton],[mat-icon-button][upovButton]',
  host: {
    '[class.upov-button]': 'true',
    '[class.upov-button--default]': 'upovButton() === "default" || upovButton() === ""',
    '[class.upov-button--primary]': 'upovButton() === "primary"',
    '[class.upov-button--secondary]': 'upovButton() === "secondary"',
    '[class.upov-button--danger]': 'upovButton() === "danger"',
    '[class.upov-button--accent]': 'upovButton() === "accent"',
    '[class.upov-button--small]': 'size() === "small"',
    '[class.upov-button--medium]': 'size() === "medium"',
    '[class.upov-button--large]': 'size() === "large"',
    '[class.upov-button--icon-filled]': 'iconFilled()',
    '[class.upov-button--icon-outlined]': 'iconOutlined()',
  },
})
export class Button {
  upovButton = input<ButtonVariant>('default', {});
  size = input<'small' | 'medium' | 'large'>('medium');
  iconFilled = input(false, {transform: booleanAttribute});
  iconOutlined = input(false, {transform: booleanAttribute});
}
