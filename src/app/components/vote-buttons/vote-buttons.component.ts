import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { VotingService } from '../../services/voting.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-vote-buttons',
  templateUrl: './vote-buttons.component.html',
  styleUrls: ['./vote-buttons.component.scss']
})
export class VoteButtonsComponent implements OnInit, OnDestroy {
  @Input() idUser: number;
  @Input() idPublicWork: number;
  @Input() idGovernor: number;
  voteCount = 0;
  userVote = 0;
  subscription: Subscription;

  constructor(
    private votingService: VotingService
  ) { }

  ngOnInit() {
    this.subscription = this.votingService.getPublicWorkVotes(this.idPublicWork)
      .subscribe(votes => {
        if (this.idUser) { this.userVote = votes[this.idUser]; }
        // sum of votes
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  upVotePublicWork() {
    console.log('idPublicWork: ' + this.idPublicWork);
    let vote = this.userVote === 1 ? 0 : 1;
    this.votingService.updatePublicWorkUserVote(this.idPublicWork, this.idUser, vote);
  }

  downVotePublicWork() {
    let vote = this.userVote === -1 ? 0 : -1;
    this.votingService.updatePublicWorkUserVote(this.idPublicWork, this.idUser, vote);
  }

  upVoteGovernor() {
    console.log('idGovernor: ' + this.idGovernor);
    let vote = this.userVote === 1 ? 0 : 1;
    this.votingService.updateGovernorUserVote(this.idGovernor, this.idUser, vote);
  }

  downVoteGovernor() {
    let vote = this.userVote === -1 ? 0 : -1;
    this.votingService.updateGovernorUserVote(this.idGovernor, this.idUser, vote);
  }

}
