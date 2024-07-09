import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPromptComponent } from './intro-prompt.component';

describe('IntroPromptComponent', () => {
  let component: IntroPromptComponent;
  let fixture: ComponentFixture<IntroPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroPromptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
