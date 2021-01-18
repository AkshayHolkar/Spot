import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzCardModule } from 'ng-zorro-antd/card';
import { HeaderComponent } from './header/header.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviecardListComponent } from './moviecard-list/moviecard-list.component';
import { SimilarMoviecardComponent } from './similar-moviecard/similar-moviecard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {SearchComponent} from './search/search.component';
import { InMemoryDataService } from './service/in-memory-data.service';
import { MovieResolverService } from './service/movie-resolver.service';
import { AlertComponent } from './alert/alert.component';
//import { SmileTwoTone} from '@ant-design/icons';
//import { Row, Col, Divider } from 'antd';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviecardComponent,
    MoviecardListComponent,
    MovieDetailComponent,
    SimilarMoviecardComponent,
    PageNotFoundComponent,
    SearchComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCardModule,
    NzPageHeaderModule,
    NzDropDownModule,
    FontAwesomeModule,
    NzLayoutModule,
   // SmileTwoTone,
  //  Row,Col,Divider, 
 
  ],
  providers: [HttpClientModule,{ provide: NZ_I18N, useValue: en_US }, InMemoryDataService, MovieResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }

