import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sign-in-modal',
  standalone: true,
  imports: [],
  templateUrl: './sign-in-modal.component.html',
  styleUrl: './sign-in-modal.component.css'
})
export class SignInModalComponent {
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  onClose(): void {
    this.closeModal.emit();
  }
}
