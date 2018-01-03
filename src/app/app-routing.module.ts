import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { OverviewComponent } from './components/overview/overview.component';
import { GovernorComponent } from './components/governor/governor.component';
import { PublicWorkListComponent } from './components/public-work-list/public-work-list.component';
import { ComplaintListComponent } from './components/complaint-list/complaint-list.component';
import { PublicWorkDetailComponent } from './components/public-work-detail/public-work-detail.component';
import { PublicWorkNewComponent } from './components/public-work-new/public-work-new.component';


const routes: Routes = [
  { path: '', component: HomepageComponent,
    children: [
      { path: '', component: OverviewComponent, pathMatch: 'full' },
      { path: 'funcionarios/:idGovernor', component: GovernorComponent,
        children: [
          { path: '', redirectTo: 'obras', pathMatch: 'full' },
          { path: 'obras', component: PublicWorkListComponent },
          { path: 'obras/nueva', component: PublicWorkNewComponent },
          { path: 'obras/:idPublicWork', component: PublicWorkDetailComponent },
          { path: 'quejas', component: ComplaintListComponent }
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
