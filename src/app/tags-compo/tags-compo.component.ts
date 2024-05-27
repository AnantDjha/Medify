import { Component } from '@angular/core';
import { Tags } from '../information/Tags';
import { MedicineService } from '../services/medicine/medicine.service';

@Component({
  selector: 'app-tags-compo',
  templateUrl: './tags-compo.component.html',
  styleUrl: './tags-compo.component.css'
})
export class TagsCompoComponent {

  itemOfTags:Tags[] = []

  constructor(private tagComponent:MedicineService)
  {
    this.itemOfTags = tagComponent.getTags();
  }
}
