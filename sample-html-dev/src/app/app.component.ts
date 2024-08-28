import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, SignInModalComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title: string = 'sample-html';
  showModal: boolean = false;

  phrases: string[] = ['COMPUTER ENGINEER', 'SOFTWARE ENGINEER', 'COZY GAMER'];
  currentPhraseIndex: number = 0;
  interval: number = 2000;

  constructor() {}

  ngOnInit(): void {
    if (typeof window != 'undefined') {
      window.addEventListener('load', (): void => {
        this.startChange();
      });
    }
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  public changePhrase(): void {
    this.currentPhraseIndex =
      (this.currentPhraseIndex + 1) % this.phrases.length;
    const phraseElement: HTMLElement | null =
      document.getElementById('changing-phrase');
    if (phraseElement) {
      phraseElement.textContent = this.phrases[this.currentPhraseIndex];
    }
  }

  startChange(): void {
    setInterval(() => this.changePhrase(), this.interval);
    console.log('startChange is called');
  }
}
