import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';

const routes: Routes = [

  { path: 'SobreMi', component: SobreMiComponent },
  { path: '',   redirectTo: '/SobreMi', pathMatch: 'full' },
  { path: '**', redirectTo: '/SobreMi'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
