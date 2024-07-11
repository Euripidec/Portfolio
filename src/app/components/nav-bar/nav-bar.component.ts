import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  visitorsCount: number = 0;
  isMuted: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000);
    this.visitorsCount = this.getVisitorsCount();
  }

  updateDateTime() {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    };
    const datetime = now.toLocaleString('en-US', options).replace(',', '').replace(':', ':');
    const datetimeElement = document.getElementById('datetime');
    if (datetimeElement) {
      datetimeElement.textContent = datetime;
    }
  }
  

  toggleMute() {
    const audioElement = (window as any).homeThemeAudio;
    if (audioElement) {
      this.isMuted = !this.isMuted;
      audioElement.muted = this.isMuted;
      const muteButton = document.querySelector('.mute-button');
      if (muteButton) {
        muteButton.textContent = this.isMuted ? '🔇' : '🔊';
      }
    }
  }
  getVisitorsCount(): number {
    // Replace with your logic to fetch visitors count
    return 1234;
  }
}
