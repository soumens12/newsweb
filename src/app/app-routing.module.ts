import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportnewsComponent } from './sportnews/sportnews.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';
import { TechnewsComponent } from './technews/technews.component';

const routes: Routes = [
  {path:'', component:TopheadingComponent},//home
  {path:'sports', component:SportnewsComponent},//Sports news
  {path:'business', component:BusinessnewsComponent},//Sports news
  {path:'entertainment', component:EntertainmentnewsComponent},//Sports news
  {path:'tech', component:TechnewsComponent},//Sports news
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
