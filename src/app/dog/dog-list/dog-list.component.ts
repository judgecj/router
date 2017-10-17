import { Component, OnInit } from '@angular/core';
import { PetService } from '../../pet.service';
import { Observable } from 'rxjs/Observable';

import { Pet } from '../../pet';
@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {


   dogs: Observable<any[]>;
  
    constructor(private petService: PetService) {
  
    }
  
    // Load data ones componet is ready
    ngOnInit() {
      // Pass retreived pets to the property
      this.dogs = this.petService.findPets('dog');
    }

}
