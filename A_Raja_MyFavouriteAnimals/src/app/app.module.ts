import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterTypePipePipe } from './filter-type-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ContentListComponent,
    FilterTypePipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
