import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/PortfolioComponent';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:'full'},
  {path:"home" , component:HomeComponent , title:'Home'},
  {path:"about" , component:AboutComponent , title:"about"},
  {path:"contact" , component:ContactComponent , title:"Contact"},
  {path:"portfolio" , component:PortfolioComponent , title:"Portfolio"},
  {path:"**" , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
