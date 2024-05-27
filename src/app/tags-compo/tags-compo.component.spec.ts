import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsCompoComponent } from './tags-compo.component';

describe('TagsCompoComponent', () => {
  let component: TagsCompoComponent;
  let fixture: ComponentFixture<TagsCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TagsCompoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagsCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
