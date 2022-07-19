import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddnewformComponent } from './components/addnewform/addnewform.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: AddnewformComponent },
    // { path: 'formpage', component: AddnewformComponent },
    { path: 'landing', component: LandingpageComponent },]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}