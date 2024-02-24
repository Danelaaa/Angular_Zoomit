import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MainFilterComponent } from './main/main-filter/main-filter.component';
import { ZoomCarsMainComponent } from './zoom/zoom-cars-main/zoom-cars-main.component';
import { ZoomCardsComponent } from './zoom/zoom-cards/zoom-cards.component';
import { SubjectMainComponent } from './subject/subject-main/subject-main.component';
import { SubectCardsComponent } from './subject/subect-cards/subect-cards.component';
import { PopularZoomMainComponent } from './popular-zoom/popular-zoom-main/popular-zoom-main.component';
import { PopularZoomCardsComponent } from './popular-zoom/popular-zoom-cards/popular-zoom-cards.component';
import { ProffesionalsMainComponent } from './proffesionals/proffesionals-main/proffesionals-main.component';
import { ProffesionalsMainCardsComponent } from './proffesionals/proffesionals-main-cards/proffesionals-main-cards.component';
import { FooterMainComponent } from './footer/footer-main/footer-main.component';
import { AdminComponent } from './admin/admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user/user.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full',
  },
  { path: 'home', 
    component: UserComponent, 
  },
  { path: 'admin', 
    component: AdminComponent, 
  },
  
  
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MainFilterComponent,
    ZoomCarsMainComponent,
    ZoomCardsComponent,
    SubjectMainComponent,
    SubectCardsComponent,
    PopularZoomMainComponent,
    PopularZoomCardsComponent,
    ProffesionalsMainComponent,
    ProffesionalsMainCardsComponent,
    FooterMainComponent,
    AdminComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})


export class AppModule { }
export class AppHttpModule { }
