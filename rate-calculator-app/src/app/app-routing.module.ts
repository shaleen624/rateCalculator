import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ReferenceDataComponent } from './reference-data/reference-data.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'reference-data', component: ReferenceDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
