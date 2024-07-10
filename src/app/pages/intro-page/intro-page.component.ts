import { Component } from '@angular/core';
import { IntroVidComponent } from '../../components/intro-vid/intro-vid.component';

@Component({
  selector: 'app-intro-page',
  standalone: true,
  imports: [IntroVidComponent],
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.css'
})
export class IntroPageComponent {

}
