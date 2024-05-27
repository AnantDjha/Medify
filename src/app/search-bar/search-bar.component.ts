import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
    itemToSearch:string = ""
    constructor(private route: Router,private params:ActivatedRoute){
      params.params.subscribe(value =>{
        if(value['itemName'])
        {
          this.itemToSearch = value['itemName']
        }
      })
    }
    search()
    {
      this.route.navigateByUrl("/search/"+this.itemToSearch);
    }
}
