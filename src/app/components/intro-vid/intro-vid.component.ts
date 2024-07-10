import { Component,ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { IntroPromptComponent } from '../intro-prompt/intro-prompt.component';

@Component({
  selector: 'app-intro-vid',
  standalone: true,
  imports: [IntroPromptComponent],
  templateUrl: './intro-vid.component.html',
  styleUrls: ['./intro-vid.component.css']
})
export class IntroVidComponent {
  @ViewChild('intro-vid', { static: true }) introVid!: ElementRef<HTMLVideoElement>;

  constructor(private router: Router) {}

  unmuteVideo() {
    const introVideo = document.getElementById('intro-vid') as HTMLVideoElement;
    introVideo.muted = false;
    introVideo.play();  
  }

  onVidEnd() {
    this.router.navigate(['home']);
  }
}
