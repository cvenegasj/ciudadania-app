import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Feature Modules & Components */
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { HomepageModule } from './homepage/homepage.module';
import { OverviewComponent } from './components/overview/overview.component';
import { GovernorComponent } from './components/governor/governor.component';
import { PublicWorkListComponent } from './components/public-work-list/public-work-list.component';
import { ComplaintListComponent } from './components/complaint-list/complaint-list.component';
import { VoteButtonsComponent } from './components/vote-buttons/vote-buttons.component';
import { PublicWorkNewComponent } from './components/public-work-new/public-work-new.component';
import { PublicWorkDetailComponent } from './components/public-work-detail/public-work-detail.component';

/* Services */
import { VotingService } from './services/voting.service';
import { UserService } from './services/user.service';
import { ComplaintService } from './services/complaint.service';
import { GovernorService } from './services/governor.service';
import { PublicWorkService } from './services/publicWork.service';
import { CommentPostComponent } from './components/comment-post/comment-post.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    GovernorComponent,
    PublicWorkListComponent,
    ComplaintListComponent,
    VoteButtonsComponent,
    PublicWorkNewComponent,
    PublicWorkDetailComponent,
    CommentPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    FormsModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),

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
