import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroVidComponent } from './components/intro-vid/intro-vid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,IntroVidComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
