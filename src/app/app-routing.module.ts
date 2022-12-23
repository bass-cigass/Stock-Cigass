import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeUtilisateurComponent } from './utilisateurs/liste-utilisateur/liste-utilisateur.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "utilisteurs"},
  {path: "utilisateurs", component: ListeUtilisateurComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
