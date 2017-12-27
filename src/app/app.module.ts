import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';

/* Feature Modules & Components */
import { HomepageModule } from './homepage/homepage.module';
import { OverviewComponent } from './components/overview/overview.component';
import { GovernorComponent } from './components/governor/governor.component';
import { PublicWorkListComponent } from './components/public-work-list/public-work-list.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';

/* Services */
import { VotingService } from './services/voting.service';
import { UserService } from './services/user.service';
import { ComplaintService } from './services/complaint.service';
import { GovernorService } from './services/governor.service';
import { PublicWorkService } from './services/publicWork.service';
import { VoteButtonsComponent } from './components/vote-buttons/vote-buttons.component';
import { NewPublicWorkComponent } from './components/new-public-work/new-public-work.component';
import { PublicWorkDetailComponent } from './components/public-work-detail/public-work-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    GovernorComponent,
    PublicWorkListComponent,
    ComplaintsComponent,
    VoteButtonsComponent,
    NewPublicWorkComponent,
    PublicWorkDetailComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    HttpClientModule,
    AppRoutingModule,

    HomepageModule
  ],
  providers: [
    VotingService,
    UserService,
    ComplaintService,
    GovernorService,
    PublicWorkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
