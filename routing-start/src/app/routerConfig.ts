import {  Routes } from '@angular/router';
//import { FruitListComponent } from './fruit-list/fruit-list.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: 'fruit-list', component: FruitListComponent },
  {path:   'home', component: HomeComponent},
  {path:  'edit-server', component: EditServerComponent},

  {path:  'user', component: UserComponent},
  {path:  'user/:id/:name', component: UserComponent},
  {path:  'servers', component: ServersComponent},

  {path:  'servers/:id/edit', component: EditServerComponent},
  //{ path: 'number-display', component: NumberDisplayComponent },


];

export default appRoutes;
