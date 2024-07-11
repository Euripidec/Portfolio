import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiletreeWindowComponent } from './filetree-window.component';

describe('FiletreeWindowComponent', () => {
  let component: FiletreeWindowComponent;
  let fixture: ComponentFixture<FiletreeWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiletreeWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiletreeWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
