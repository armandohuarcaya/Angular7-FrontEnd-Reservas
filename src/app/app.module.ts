import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { ClienteMantenimientoComponent } from './pages/cliente/cliente-mantenimiento/cliente-mantenimiento.component';
import { ClienteRegistroComponent } from './pages/cliente/cliente-registro/cliente-registro.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './pages/searchs/filterpipe';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './pages/catalogo/components/list/list.component';
// import { CatalogoService } from './pages/catalogo/servicios-api/setup/catalogo.service';
// import { ServiceCatalogoService } from './pages/catalogo/providers/service';

const PIPES: any = [
  FilterPipe,
];
const NGB_MODULES: any = [
  // NgbDatepickerModule,
];
const COMPONENTS: any[] = [
  ListComponent,
  // DashboardOrdersComponent,
];

const SERVICES: any[] = [
  // CatalogoService,
  // ServiceCatalogoService,
];


@NgModule({
  declarations: [
    AppComponent,
    ClienteMantenimientoComponent,
    ClienteRegistroComponent,
    
    ...PIPES,
    ...NGB_MODULES,
    ...COMPONENTS,
    ...SERVICES
  ],

  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    // NgbDatepickerModule,
  ],

  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
