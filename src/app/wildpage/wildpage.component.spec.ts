import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildpageComponent } from './wildpage.component';

describe('WildpageComponent', () => {
  let component: WildpageComponent;
  let fixture: ComponentFixture<WildpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WildpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WildpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
