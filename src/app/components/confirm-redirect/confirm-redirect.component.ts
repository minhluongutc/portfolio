import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgIf} from "@angular/common";
import {TranslatePipe} from "../../pipe/translate.pipe";

@Component({
  selector: 'app-confirm-redirect',
  standalone: true,
  imports: [
    NgIf,
    TranslatePipe
  ],
  templateUrl: './confirm-redirect.component.html',
  styleUrl: './confirm-redirect.component.scss'
})
export class ConfirmRedirectComponent {

  @Input() visible = false;
  @Input() target!: string;
  @Input() message!: string;

  @Output() close = new EventEmitter<void>();

  isEmail(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.target);
  }

  confirm(): void {
    if (this.isEmail()) {
      window.location.href = `mailto:${this.target}`;
    } else {
      window.open(this.target, '_blank');
    }
    this.close.emit();
  }

  cancel(): void {
    this.close.emit();
  }
}
