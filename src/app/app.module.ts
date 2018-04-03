import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-component/header/header.component';
import { FooterComponent } from './shared-component/footer/footer.component';
import { DisplayContainerComponent } from './shared-component/display-container/display-container.component';
import { SearchTabComponent } from './shared-component/search-tab/search-tab.component';

import { SearchService } from './services/search.service';
import { FlightInfoBoxComponent } from './shared-component/flight-info-box/flight-info-box.component';
import { OrderByPipe } from './custom-pipes/order-by.pipe';
import { RefineByPrice } from './custom-pipes/refine-by-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DisplayContainerComponent,
    SearchTabComponent,
    FlightInfoBoxComponent,
    OrderByPipe,
    RefineByPrice
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
