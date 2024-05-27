import { Component } from '@angular/core';
import { MedicineService } from '../services/medicine/medicine.service';
import { mediInfo } from '../information/mediInfo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  medicineImages:mediInfo[]=[];
  constructor(private ms:MedicineService, private route:ActivatedRoute){
    route.params.subscribe(param =>{
      if(param["itemName"])
      {
        this.medicineImages = ms.getAll().filter(f=> f.name.toLowerCase().includes(param['itemName'].toLowerCase()))
      }
      else if(param['tag'])
      {
        this.medicineImages = ms.getAllByTag(param['tag']);
      }
      else{
        this.medicineImages = ms.getAll();
      }
    })
   
  }
  
}
