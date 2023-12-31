import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { MyworkComponent } from './component/mywork/mywork.component';
import { ServiceComponent } from './component/service/service.component';
import { PartenershipComponent } from './component/partenership/partenership.component';
import { ServiceDetailsComponent } from './component/service-details/service-details.component';
import { ReqestServiesComponent } from './component/reqest-servies/reqest-servies.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeOurWorkComponent } from './component/home-our-work/home-our-work.component';
import { HomeAboutComponent } from './component/home-about/home-about.component';
import { HomeOurPartenerComponent } from './component/home-our-partener/home-our-partener.component';
import { HomeOurWellcomeComponent } from './component/home-our-wellcome/home-our-wellcome.component';
import { HomeServiceComponent } from './component/home-service/home-service.component';
import {EmailserveService} from "../app/service/emailserve.service"
import { HttpClientModule } from '@angular/common/http'; 
import { ToastrModule } from 'ngx-toastr';
import { PartenerOneComponent } from './component/partener-one/partener-one.component';
import { PartenerTwoComponent } from './component/partener-two/partener-two.component';
import { PartenerThreeComponent } from './component/partener-three/partener-three.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    MyworkComponent,
    ServiceComponent,
    PartenershipComponent,
    ServiceDetailsComponent,
    ReqestServiesComponent,
    HomeOurWorkComponent,
    HomeAboutComponent,
    HomeOurPartenerComponent,
    HomeOurWellcomeComponent,
    HomeServiceComponent,
    PartenerOneComponent,
    PartenerTwoComponent,
    PartenerThreeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot()

  ],
  providers: [EmailserveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
