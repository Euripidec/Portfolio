import { Component } from '@angular/core';
import { IntroPromptComponent } from '../intro-prompt/intro-prompt.component';

@Component({
  selector: 'app-intro-vid',
  standalone: true,
  imports: [IntroPromptComponent],
  templateUrl: './intro-vid.component.html',
  styleUrls: ['./intro-vid.component.css']
})
export class IntroVidComponent {

  unmuteVideo() {
    const introVideo = document.getElementById('intro-vid') as HTMLVideoElement;
    introVideo.muted = false;
    introVideo.play();  
  }
}
