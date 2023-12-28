import { RouterModule, Routes } from '@angular/router';
import { PersonDashboardComponent } from './person/dashboard/person-dashboard.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: 'persons', component: PersonDashboardComponent}
];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
export class AppRoutingModule {}