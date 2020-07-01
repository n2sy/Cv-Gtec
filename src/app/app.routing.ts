import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { HomeAccountsComponent } from './home-accounts/home-accounts.component';
import { ManageServerComponent } from './manage-server/manage-server.component';
import { ColorComponent } from './color/color.component';
import { NotFoundComponent } from './not-found/not-found.component';


const gtecRoutes : Routes = [
    {path : '', component: HomeComponent},
    {path :'cv', component : CvComponent},
    {path : 'word', component: MsWordComponent},
    {path : 'accounts', component: HomeAccountsComponent},
    {path : 'servers', component: ManageServerComponent},
    {path : 'color', component: ColorComponent},
    {path : 'not-found', component: NotFoundComponent},
    {path : '**', redirectTo : 'not-found'}
]

export const GTEC_ROUTING = RouterModule.forRoot(gtecRoutes);