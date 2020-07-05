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
import { RecrueComponent } from './recrue/recrue.component';
import { HomeComponent } from './home/home.component';
import { GTEC_ROUTING } from './app.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './info/info.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './edit-server/edit-server.component';

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
    ListeAccountComponent,
    RecrueComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    InfoComponent,
    AddComponent,
    UpdateComponent,
    UserComponent,
    UsersComponent,
    ServerComponent,
    ServersComponent,
    EditServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GTEC_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
