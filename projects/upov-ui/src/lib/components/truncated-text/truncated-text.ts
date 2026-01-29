import {booleanAttribute, ChangeDetectionStrategy, Component, input, numberAttribute} from '@angular/core';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'upov-truncated-text,[truncatedText]',
  imports: [
    MatTooltip,
  ],
  template: `
    <span class="trunk"
          [matTooltip]="textContainer.textContent"
          [matTooltipDisabled]="disableTooltip()"
          [matTooltipShowDelay]="tooltipShowDelay()"
          [matTooltipHideDelay]="tooltipHideDelay()"
    >
      <span class="text" #textContainer>
        <ng-content></ng-content>
      </span>
    </span>
  `,
  styleUrl: './truncated-text.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TruncatedText {
  /**
   * Disable the tooltip that shows the full text on hover.
   */
  disableTooltip = input(false, {transform: booleanAttribute});
  /**
   * Delay in milliseconds before showing the tooltip when hovering over the truncated text.
   */
  tooltipShowDelay = input(400, {transform: numberAttribute});
  /**
   * Delay in milliseconds before hiding the tooltip after the mouse leaves the truncated text.
   */
  tooltipHideDelay = input(100, {transform: numberAttribute});

}
