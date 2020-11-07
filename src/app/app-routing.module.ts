import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user',component: UserComponent },
  { path: 'edit-user', component: EditUserComponent },
  {
    path: '**',redirectTo: 'user', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
