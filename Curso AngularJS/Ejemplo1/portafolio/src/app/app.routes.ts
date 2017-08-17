import { RouterModule, Routes} from '@angular/router';

import { 
    AboutComponent,
    MainComponent,
    ItemComponent
  
  } from "./components/index.paginas";

const app_routes: Routes = [

    { path: '', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item', component: ItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: ''}

];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});