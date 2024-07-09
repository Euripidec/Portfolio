import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntroVidComponent } from './intro-vid.component';

describe('IntroVidComponent', () => {
  let component: IntroVidComponent;
  let fixture: ComponentFixture<IntroVidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroVidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
