import {booleanAttribute, ChangeDetectionStrategy, Component, computed, input} from '@angular/core';

@Component({
  selector: 'upov-logo',
  template: `
    <span class="upov-logo" [style.font-size]="logoSize()" [class.upov-logo-light]="light()">
      <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve"
           style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 2441 686">
        <path
          d="M117.786 107.313c-1.847 0-3.446-.877-4.796-2.63-1.35-1.754-2.387-4.25-3.111-7.489-.724-3.238-1.085-7.072-1.085-11.5V52h4.972v33.694c0 2.059.168 3.844.504 5.355.336 1.51.808 2.669 1.416 3.476.609.807 1.329 1.21 2.162 1.21.837 0 1.564-.403 2.18-1.21.616-.807 1.088-1.966 1.416-3.476.328-1.511.492-3.296.492-5.355V52h4.972v33.694c0 4.428-.367 8.262-1.101 11.5-.734 3.239-1.782 5.735-3.144 7.489-1.363 1.753-2.989 2.63-4.877 2.63Z"
          fill="currentColor" style="fill-rule:nonzero" transform="matrix(29.28199 0 0 11.94365 -3170.995 -606.07)"/>
        <path
          fill="currentColor"
          d="M1624.296 202.5s77.013 71.296 70.833 137.5c-6.179 66.204-21.75 148.533-150 179.167 0 0-75-31.367-75-100 0-68.634 137.9-125.146 150-170.834 10.109-38.179 4.167-45.833 4.167-45.833ZM2054.315 672.08l-238.33-657.896h148.096l163.232 488.644L2289.46 14.184h140.058L2196.112 672.08h-141.797Z"/>
        <path
          fill="currentColor"
          d="M1520.13 15c181.67 0 329.166 146.563 329.166 327.083 0 180.521-147.496 327.084-329.167 327.084-181.67 0-329.166-146.563-329.166-327.084 0-180.52 147.496-327.083 329.166-327.083Zm0 125c112.683 0 204.166 91.483 204.166 204.167 0 112.683-91.483 204.166-204.167 204.166-112.683 0-204.166-91.483-204.166-204.166 0-112.684 91.483-204.167 204.166-204.167ZM649.296 15v658.333h129.167v-550h104.166s133.334-6.158 133.334 95.834c0 101.991-129.167 91.666-129.167 91.666l-108.333.067v116.32h125s250 16.01 250-203.887C1153.463-9.062 915.963 15 915.963 15H649.296Z"/>
        <path
          d="M386 51s16.775 14.972 14.84 30.84c-1.964 16.102-10.5 33.008-31.92 38.2 0 0-13.92-2.968-13.92-19.44s27.096-27.635 30-38.6c2.426-9.163 1-11 1-11Z"
          style="fill:var(--logo-accent-color)" transform="matrix(4.16667 0 0 4.16667 15.963 -10)"/>
      </svg>
    </span>
  `,
  styleUrl: './logo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Logo {
  /**
   * Size of the logo. Can be a number (pixels) or one of 'small', 'medium', 'large'.
   * You can also provide a string with units, e.g. '48px', '3em', '2rem'.
   *
   * When not set, the logo inherits the font size of its container element.
   */
  size = input<number | 'small' | 'medium' | 'large'>();
  light = input(false, {transform: booleanAttribute});
  private defaultSize = 'inherit';
  protected logoSize = computed<string>(() => {
    if (!this.size()) {
      return this.defaultSize;
    }
    if (typeof this.size() === 'number') {
      return this.size() as number > 0 ? `${this.size()}px` : this.defaultSize;
    }
    const size = this.size() as string;
    if (size.endsWith('px') || size.endsWith('em') || size.endsWith('rem')) {
      return this.size() as string;
    }
    switch (this.size()) {
      case 'small':
        return '16px';
      case 'medium':
        return '25px';
      case 'large':
        return '50px';
      default:
        return this.defaultSize;
    }
  });
}
