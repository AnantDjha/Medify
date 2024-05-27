import { Injectable } from '@angular/core';
import { mediInfo } from '../../information/mediInfo';
import { Tags } from '../../information/Tags';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor() { }

  getMedicineById(id:number)
  {
      return this.getAll().find(item => item.id == id)
  }

  getAllByTag(item:string)
  {
    
    return item == "All" ? this.getAll() : this.getAll().filter(m => m.tag?.includes(item))
  }
  getTags():Tags[]
  {
    return [
        {name:"All",quantity:8},
        {name:"Releif",quantity:2},
        {name:"PainKiller",quantity:2},
        
        {name:"Cough",quantity:1},
        {name:"Beuty",quantity:1},
        {name:"others",quantity:2}
        
    ]
  }
  
  getAll():mediInfo[]
  {
    return [
      {
        id :1,
        name:"Vicks vaporub",
        quantity:"100 ml",
        price:164,
        discount:"12% off",
        url:"./assets/vicksVaporub.jpg",
        tag:["Releif",'All'],
        detail:"Vicks Vaporub Relief From Cold, Cough, Blocked Nose, Headache, Body ache, Muscular stiffness and Breathing difficulty, 105ml",
        brand:"Vicks",
        rate:190,
        about:["Get instant relief from 6 Cough and Cold symptoms; Relieves Cough, nasal congestion, body ache, headache, muscular stiffness and body ache",
      "Suitable for adults and children above 2 years old",
    "Contains natural ingredients like Menthol, Camphor and Eucalyptus Oil known for their therapeutic benefits in cold and cough relief"]

      },
      {
        id :2,

        name:"Cofsils",
        quantity:"pack of 15 tablets",
        price:25.41,
        discount:"4% off",
        url:"./assets/cofsil.jpg",
        tag:["Cough",'All'],
        detail:"Strepsils Blister 12's (Pack of 12 strips with 8 tablets each) | Quick Relief from Sore Throat | Fights Bacterial Infection | For Cough & Cold",
        brand:"Strepsils",
        rate:125,
        about:["It's unique triple relief formula is Anti Viral, Anti Bacterial and gives soothing effect for quick relief from sore throat, scratchy throat & itchy throat.",
      "Benefits : Quick relief from sore throat.",
    "Dosage : One lozenge every 3 hrs and let it dissolve slowly in the mouth. If symptoms continue consult your Doctor."]







      },
      {
        id :3,

        name:"Vicks Inhaler",
        quantity:"10 ml",
        price:65.66,
        discount:"9% off",
        url:"./assets/vicksInhaler.webp",
        tag:["Releif",'All'],
        detail:"Steam Inhalation, Quick relief from blocked nose, sinus congestion, headache, and cough due to cold.",
        brand:"Vicks",
        rate:50,
        about:["Quick relief from blocked nose, cough & headache","Blend of Menthol, Camphor, and Eucalyptus"]






      },
      {
        id :4,

        name:"Crocin",
        quantity:"pack of 15 tablets",
        price:65,
        discount:"20% off",
        url:"./assets/cro0023.webp",
        tag:["PainKiller",'All'],
        detail:"Strip of 15 Tablets",
        brand:"Crocin",
        rate:300,
        about:["Composition: PARACETAMOL-500MG","Dosage: As directed by the Physician.","Storage Instruction:To be stored in cool places at 10°C to 25°C. Store in a cool and dry place away from sunlight"]






      },
      {
        id :5,

        name:"Himalaya karela tablets",
        quantity:"50 s",
        price:174,
        discount:"13% off",
        url:"./assets/karelaTablet.jpeg",
        tag:["others",'All'],
        detail:"Himalaya Himalaya Wellness Pure Herbs Karela Metabolic Wellness - 60 Tablets, White",
        brand:"karela",
        rate:160,
        about:["Manufacturer Name: The Himalaya Drug Company",
        "Indications: Madhumeha, (Diabetes, Metabolic disorders)",
       " 1-2 Tablets twice daily or as directed by the physician",
        "Country of Origin: India"]






      },
      {
        id :6,

        name:"Nicotex",
        quantity:"5 mg 7's",
        price:509.15,
        discount:"18% off",
        url:"./assets/nicotex.jpg",
        tag:["others",'All'],
        detail:"Cipla Nicotex Nicotine Sugar Free Mint Plus Gums 5mg | Helps to Quit Smoking | WHO - approved Therapy ",
        brand:"Nikotex",
        rate:70,
        about:["A 12-week therapy program that will help you get back to life without dependence on cigarettes.",
        "Works on WHO-approved Nicotine Replacement Therapy.",
        "No. 1 Doctor recommended brand in India.",
        "Doubles your chances of quitting smoking."]






      },
      {
        id :7,

        name:"Himalaya neem face wash",
        quantity:"100 ml",
        price:143,
        discount:"4% off",
        url:"./assets/faceWash.webp",
        tag:["Beuty",'All'],
        detail:"Himalaya Herbals Purifying Neem Face Wash, 100ml",
        brand:"Himalya",
        rate:200,
        about:["Prevents recurrence of acne","Cleanses face; Container Type: Tube","Target Audience: Men & Women"]






      },
      {
        id :8,

        name:"Paracetamol",
        quantity:"pack of 12 tablets",
        price:20,
        discount:"11% off",
        url:"./assets/paracetamol.jpg",
        tag:["PainKiller",'All'],
        detail:"99F 650 - Strip of 12 Tablets",
        brand:"Paracetamol",
        rate:80,
        about:["Dosage: As directed by the Physician",
      "Storage Instructions: Store protected from light and moisture at a temperature not exceeding 30°C",
    "This product will have minimum 3 months expiry at the time of order dispatch"]





      },

    ]
  }
}
