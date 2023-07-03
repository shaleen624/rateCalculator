import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ReferenceDataComponent } from './reference-data/reference-data.component';
import { ReferenceDataHistoryComponent } from './reference-data-history/reference-data-history.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'reference-data', component: ReferenceDataComponent },
  { path: 'history', component: ReferenceDataHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
