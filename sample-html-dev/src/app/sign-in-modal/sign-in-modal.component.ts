import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ForgotPasswordComponent} from "../forgot-password/forgot-password.component";

@Component({
  selector: 'app-sign-in-modal',
  standalone: true,
  imports: [
    FormsModule,
    ForgotPasswordComponent
  ],
  templateUrl: './sign-in-modal.component.html',
  styleUrl: './sign-in-modal.component.css'
})
export class SignInModalComponent {
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  username: String = ''
  password: String = ''

  showForgotPasswordModal: boolean = false;

  onClose(): void {
    this.closeModal.emit();
  }

  onSubmit(event: Event) {
    event.preventDefault()
    console.log('Username: ', this.username);
    console.log('Password: ', this.password);
    this.onClose();
  }

  onForgotPassword(event: Event) {
    event.preventDefault();
    console.log('Forgot Password is clicked!');
    this.showForgotPasswordModal = true;
  }
}
