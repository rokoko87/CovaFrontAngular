import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { InventarioComponent } from './inventario/inventario.component';
import { FooterComponent } from './footer/footer.component';
import { EntregasComponent } from './entregas/entregas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EntrarEmpresaComponent } from './entrar-empresa/entrar-empresa.component';
import { CrearEmpresaComponent } from './crear-empresa/crear-empresa.component';
import { AggridComponent } from './aggrid/aggrid.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    InventarioComponent,
    FooterComponent,
    EntregasComponent,
    ContactoComponent,
    EntrarEmpresaComponent,
    CrearEmpresaComponent,
    AggridComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent, NavigationComponent, HomeComponent, InventarioComponent, FooterComponent, EntregasComponent, ContactoComponent, EntrarEmpresaComponent,CrearEmpresaComponent]
})
export class AppModule { }
