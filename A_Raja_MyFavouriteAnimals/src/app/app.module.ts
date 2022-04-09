import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterTypePipePipe } from './filter-type-pipe.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { AppMessagesComponent } from './app-messages/app-messages.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { DialogDataComponent } from './dialog-data/dialog-data.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ContentListComponent,
    FilterTypePipePipe,
    HoverAffectDirective,
    AppMessagesComponent,
    ModifyContentComponent,
    DialogDataComponent,
    ContentDetailComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  entryComponents: [DialogDataComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 500
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatDividerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }