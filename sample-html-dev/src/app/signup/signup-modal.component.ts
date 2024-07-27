import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NgOptimizedImage } from "@angular/common";

@Component({
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './signup-modal.component.html',
  standalone: true,
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent {

  signInButtonOnClick() {
    // Get the modal
    const modal: HTMLElement | null = document.getElementById("signInModal");

    // Get the button that opens the modal
    const btn: HTMLElement | null = document.getElementById("signInButton");

    // Get the <span> element that closes the modal
    const span: HTMLElement | null = document.getElementsByClassName("close")[0] as HTMLElement;

    // When the user clicks on the button, open the modal
    if (btn) {
      btn.onclick = function() {
        if (modal) {
          modal.style.display = "block";
        }
      }
    }

    // When the user clicks on <span> (x), close the modal
    if (span) {
      span.onclick = function() {
        if (modal) {
          modal.style.display = "none";
        }
      }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event: MouseEvent) {
      if (modal && event.target === modal) {
        modal.style.display = "none";
      }
    }

  }
}
