import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { FatherComponent } from './father/father.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { DirectComponent } from './direct/direct.component';
import { CustomDirDirective } from './custom-dir.directive';
import { ManageServerComponent } from './manage-server/manage-server.component';
import { ShortPipe } from './short.pipe';
import { FilterPipe } from './filter.pipe';
import { NoImagePipe } from './no-image.pipe';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ListePersonnesService } from './liste-personnes.service';
import { HomeAccountsComponent } from './home-accounts/home-accounts.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ListeAccountComponent } from './liste-account/liste-account.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    CardComponent,
    FatherComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    DirectComponent,
    CustomDirDirective,
    ManageServerComponent,
    ShortPipe,
    FilterPipe,
    NoImagePipe,
    MsWordComponent,
    HomeAccountsComponent,
    NewAccountComponent,
    ListeAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
