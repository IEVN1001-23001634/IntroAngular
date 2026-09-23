import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeroesList } from './heroes/heroes-list/heroes-list';
import { HeroesFilterPipe } from './heroes/heroes-filter-pipe';
import { OperasBas } from './formularios/operas-bas/operas-bas';
import { DistanciaComponent } from './formularios/distancia/distancia';
import { AreasComponent } from './formularios/areas/areas';
import { LoginComponent } from './formularios/login/login';


@NgModule({
  declarations: [App, HeroesList, HeroesFilterPipe, OperasBas,DistanciaComponent, AreasComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
