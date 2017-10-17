import { Component, OnInit } from '@angular/core';
import { PetService } from '../../pet.service'
import { Observable } from 'rxjs/Observable';
import {  ActivatedRoute } from '@angular/router';
import { Pet } from '../../pet';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css']
})
export class DogDetailsComponent implements OnInit {

  private sub:any;
  private dog:string[];

  constructor(private petService: PetService, private route: ActivatedRoute) {

  }

  // Load data ones componet is ready
  ngOnInit() {
      // Subscribe to route params
      this.sub = this.route.params.subscribe(params => {
        let id = params['id'];
       // Retrieve Pet with Id route param
        this.petService.findPetById(id).subscribe(dog => this.dog = dog);
    });
  }

  ngOnDestroy() {
      // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }

}
