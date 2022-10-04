import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { WishlistComponent } from "./wishlist/wishlist.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'wishlist', component: WishlistComponent, pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
