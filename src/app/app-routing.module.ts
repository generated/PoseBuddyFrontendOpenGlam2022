import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PictureComponent } from './picture/picture.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'picture', component: PictureComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
