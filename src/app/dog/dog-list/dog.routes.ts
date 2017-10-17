import { RouterModule, Routes } from '@angular/router';

import { DogListComponent }    from '../dog-list/dog-list.component';
import { DogDetailsComponent }    from '../dog-details/dog-details.component';

// Route Configuration
export const dogRoutes: Routes = [
  { path: 'dogs', component: DogListComponent },
  { path: 'dogs/:id', component: DogDetailsComponent }
];



