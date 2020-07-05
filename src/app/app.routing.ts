import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { HomeAccountsComponent } from './home-accounts/home-accounts.component';
import { ManageServerComponent } from './manage-server/manage-server.component';
import { ColorComponent } from './color/color.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InfoComponent } from './info/info.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';


const gtecRoutes : Routes = [
    {path : '', component: HomeComponent},
    {path :'cv', children : [
        {path :'', component : CvComponent},
        {path :'add', component : AddComponent},
        {path :'edit/:id', component : UpdateComponent},
        {path :':id', component : InfoComponent}
    ]},
    {path : 'word', component: MsWordComponent},
    {path : 'accounts', component: HomeAccountsComponent},
    {path : 'servers', component: ManageServerComponent},
    {path : 'color', component: ColorComponent},
    {path : 'not-found', component: NotFoundComponent},
    {path : '**', redirectTo : 'not-found'}
]

export const GTEC_ROUTING = RouterModule.forRoot(gtecRoutes);