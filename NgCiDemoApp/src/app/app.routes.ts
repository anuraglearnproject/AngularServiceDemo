import { Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { DemoserviceComponent } from './components/demoservice/demoservice.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: StartComponent },
    { path: 'products', component: DemoserviceComponent }
];
