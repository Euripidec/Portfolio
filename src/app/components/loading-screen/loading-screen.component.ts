import { CommonModule } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit, AfterViewInit {
  @ViewChild('loadingSound') loadingSound!: ElementRef<HTMLAudioElement>;
  isLoading = true;

  ngOnInit(): void {
    this.showLoadingScreen();
    setTimeout(() => {
      this.playLoadingSound();
    }, 1500); 
  }

  ngAfterViewInit() {
      this.muteHomePageAudio();
    }

  showLoadingScreen() {
    setTimeout(() => {
      const loadingScreen = document.querySelector('.loading-screen') as HTMLElement;
      if (loadingScreen) {
        loadingScreen.classList.add('show');
      }
    }, 0); 
  }

  playLoadingSound() {
    this.loadingSound.nativeElement.play();
    this.hideLoadingScreen();
  }

  hideLoadingScreen() {
    setTimeout(() => {
      const loadingScreen = document.querySelector('.loading-screen') as HTMLElement;
      if (loadingScreen) {
        loadingScreen.classList.remove('show');
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
          this.isLoading = false;
          this.unmuteHomePageAudio();
        }, 1500); // Match this duration with the fade-out animation
      }
    }, 2000); // 1.5 seconds for the loading animation
  }

  muteHomePageAudio() {
    const homeAudio = document.getElementById('homeTheme') as HTMLAudioElement;
    if (homeAudio) {
      homeAudio.muted = true;
    }
  }

  unmuteHomePageAudio() {
    const homeAudio = document.getElementById('homeTheme') as HTMLAudioElement;
    if (homeAudio) {
      homeAudio.muted = false;
    }
  }
}
