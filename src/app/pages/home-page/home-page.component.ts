import { Component, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { LoadingScreenComponent } from '../../components/loading-screen/loading-screen.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [LoadingScreenComponent,NavBarComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild('homeTheme') homeTheme!: ElementRef<HTMLAudioElement>;
  @ViewChild('grid', { static: true }) grid!: ElementRef;

  private mouseX = 0;
  private mouseY = 0;
  private gridX = 0;
  private gridY = 0;
  private friction = 1 / 30; // Lower value for smoother, less responsive effect

  ngAfterViewInit() {
    this.homeTheme.nativeElement.volume = 0.2;
    this.animateParallax();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX / window.innerWidth - 0.5;
    this.mouseY = event.clientY / window.innerHeight - 0.5;
  }

  private animateParallax() {
    this.gridX += (this.mouseX - this.gridX) * this.friction;
    this.gridY += (this.mouseY - this.gridY) * this.friction;

    const grid = this.grid.nativeElement;
    const x = this.gridX * 50;
    const y = this.gridY * 50;

    grid.style.backgroundPosition = `${50 + x}px ${50 + y}px, ${25 - x}px ${25 - y}px`;

    requestAnimationFrame(this.animateParallax.bind(this));
  }
}
