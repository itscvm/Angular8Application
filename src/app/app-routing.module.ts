import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {IntroductionComponent} from './introduction/introduction.component';
import {AuthguardService} from './Services/authguard.service';

const routes: Routes = [{ path: '', component: LoginComponent},{ path: 'login', component: LoginComponent},
                        { path: 'dashborad', component: DashboardComponent,canActivate:[AuthguardService]},{ path: 'introduction', component: IntroductionComponent, canActivate:[AuthguardService]},
                        { path: '**', component: LoginComponent }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
