import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LtmenuComponent } from './ltmenu/ltmenu.component';
import { RtmenuComponent } from './rtmenu/rtmenu.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EntityComponent } from './entity/entity.component'

const appRoutes : Routes = [
  {path:'',component:HomeComponent},
  {path:'entiry',component:EntityComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule,
   RouterModule.forRoot(appRoutes,{ enableTracing: true } )
   ],
  declarations: [AppComponent, HelloComponent, HeaderComponent, FooterComponent, LtmenuComponent, RtmenuComponent, HomeComponent, EntityComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
