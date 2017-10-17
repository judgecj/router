import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogListComponent } from './dog/dog-list/dog-list.component';
import { DogDetailsComponent } from './dog/dog-details/dog-details.component';
import { CatDetailsComponent } from './cat/cat-details/cat-details.component';
import { CatListComponent } from './cat/cat-list/cat-list.component';
import { dogRoutes }    from './dog/dog-list/dog.routes';

const routes: Routes = [
  //{ path: '', redirectTo: '/landing', pathMatch: 'full' },
 
  {
    path: '*',
    redirectTo: '/dogs',    
    pathMatch: 'full'
  },
  { path: 'cats', component: CatListComponent },
  { path: 'dogs', component: DogListComponent },
   ...dogRoutes
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
