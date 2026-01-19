import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective {

  @Input('appTooltip') text!: string;
  @Input() tooltipPosition: TooltipPosition = 'top';

  private tooltipEl?: HTMLElement;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }

  @HostListener('mouseenter')
  show() {
    if (!this.text) return;

    this.createTooltip();
    this.setPosition();
    this.renderer.addClass(this.tooltipEl, 'opacity-100');
  }

  @HostListener('mouseleave')
  hide() {
    if (this.tooltipEl) {
      this.renderer.removeChild(document.body, this.tooltipEl);
      this.tooltipEl = undefined;
    }
  }

  private createTooltip() {
    this.tooltipEl = this.renderer.createElement('div');
    this.tooltipEl.innerText = this.text;

    const baseClasses = [
      'fixed',
      'z-50',
      'px-3',
      'py-1.5',
      'text-xs',
      'rounded-lg',
      'shadow-lg',
      'opacity-0',
      'transition-opacity',
      'duration-200',
      'bg-gray-900',
      'text-white',
      'dark:bg-gray-200',
      'dark:text-gray-900',
      'pointer-events-none'
    ];

    baseClasses.forEach(c =>
      this.renderer.addClass(this.tooltipEl!, c)
    );

    this.renderer.appendChild(document.body, this.tooltipEl);
  }

  private setPosition() {
    if (!this.tooltipEl) return;

    const hostRect = this.el.nativeElement.getBoundingClientRect();
    const tooltipRect = this.tooltipEl.getBoundingClientRect();
    const gap = 8;

    let top = 0;
    let left = 0;

    switch (this.tooltipPosition) {
      case 'bottom':
        top = hostRect.bottom + gap;
        left = hostRect.left + (hostRect.width - tooltipRect.width) / 2;
        break;

      case 'left':
        top = hostRect.top + (hostRect.height - tooltipRect.height) / 2;
        left = hostRect.left - tooltipRect.width - gap;
        break;

      case 'right':
        top = hostRect.top + (hostRect.height - tooltipRect.height) / 2;
        left = hostRect.right + gap;
        break;

      default: // top
        top = hostRect.top - tooltipRect.height - gap;
        left = hostRect.left + (hostRect.width - tooltipRect.width) / 2;
    }

    this.renderer.setStyle(this.tooltipEl, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipEl, 'left', `${left}px`);
  }

}
