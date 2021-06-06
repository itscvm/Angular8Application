import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { LoginComponent } from './login/login.component';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SidebarModule} from 'primeng/sidebar';
import {MenubarModule} from 'primeng/menubar';
import {SlideMenuModule} from 'primeng/slidemenu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IntroductionComponent } from './introduction/introduction.component';
import { AdminComponent } from './admin/admin.component';
import { ClustertabComponent } from './clustertab/clustertab.component';
import {StepsModule} from 'primeng/steps';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    IntroductionComponent,
    AdminComponent,
    ClustertabComponent
  ],
  imports: [
    AppRoutingModule,PasswordModule,ButtonModule,FormsModule,InputTextModule,
    HttpClientModule,OverlayPanelModule,PanelModule,BrowserAnimationsModule,
    SidebarModule,MenubarModule,SlideMenuModule,BrowserModule,
    BrowserAnimationsModule,StepsModule,ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
