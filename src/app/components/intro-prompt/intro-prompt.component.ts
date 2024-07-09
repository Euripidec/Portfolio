import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-prompt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro-prompt.component.html',
  styleUrls: ['./intro-prompt.component.css']
})
export class IntroPromptComponent implements OnInit {
  @Output() programInitiated = new EventEmitter<void>();
  fullText = 'Initiate startup sequence Y/N?';
  displayText = '';
  userInput: string = '';
  cursorSpeed = 100;
  promptComplete = false; 

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.typeWriterEffect();
  }

  typeWriterEffect() {
    let index = 0;
    const type = () => {
      if (index < this.fullText.length) {
        this.displayText += this.fullText.charAt(index);
        index++;
        setTimeout(type, this.cursorSpeed);
      } else {
        this.promptComplete = true; 
        this.focusInput();
      }
    };
    type();
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      if (this.userInput.toUpperCase() === 'Y') {
        this.startProgram();
      } else if (this.userInput.toUpperCase() === 'N') {
        this.redirectToYoutube();
      }
    } else if (event.key.length === 1) {
      this.userInput += event.key;
    } else if (event.key === 'Backspace') {
      this.userInput = this.userInput.slice(0, -1);
    }
  }

  startProgram() {
    const hostElement = this.elementRef.nativeElement as HTMLElement;
    const promptText = hostElement.querySelector('.prompt-text') as HTMLElement;

    if (hostElement && promptText) {
      hostElement.style.transition = 'opacity 1s, background-color 1s';
      hostElement.style.backgroundColor = 'transparent';
      hostElement.style.opacity = '0';
      promptText.style.opacity = '0';

      setTimeout(() => {
        hostElement.style.display = 'none';
        this.programInitiated.emit();
      }, 1000);
    }
  }

  redirectToYoutube() {
    window.location.href = 'https://www.youtube.com/watch?v=MC-KPbG7WnE'; 
  }

  focusInput() {
    const inputElement = this.elementRef.nativeElement.querySelector('#hidden-input');
    if (inputElement) {
      inputElement.focus();
    }
  }

}
