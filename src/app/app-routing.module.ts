import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { OverviewComponent } from './components/overview/overview.component';
import { GovernorComponent } from './components/governor/governor.component';
import { PublicWorkListComponent } from './components/public-work-list/public-work-list.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';
import { PublicWorkDetailComponent } from './components/public-work-detail/public-work-detail.component';
import { NewPublicWorkComponent } from './components/new-public-work/new-public-work.component';


const routes: Routes = [
  { path: '', component: HomepageComponent,
    children: [
      { path: '', component: OverviewComponent, pathMatch: 'full' },
      { path: 'funcionarios/:idGovernor', component: GovernorComponent,
        children: [
          { path: '', redirectTo: 'obras', pathMatch: 'full' },
          { path: 'obras', component: PublicWorkListComponent },
          { path: 'obras/nueva', component: NewPublicWorkComponent, data: { animation: 'new' } },
          { path: 'obras/:idPublicWork', component: PublicWorkDetailComponent },
          { path: 'quejas', component: ComplaintsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
