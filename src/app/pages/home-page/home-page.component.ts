import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { LoadingScreenComponent } from '../../components/loading-screen/loading-screen.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [LoadingScreenComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild('homeTheme') homeTheme!: ElementRef<HTMLAudioElement>;

  ngAfterViewInit() {
    this.homeTheme.nativeElement.volume = 0.2;

  }
}
