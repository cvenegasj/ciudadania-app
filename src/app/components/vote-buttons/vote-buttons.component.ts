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
  @Input() idItem: number;
  voteCount = 0;
  userVote = 0;
  subscription: Subscription;

  constructor(
    private votingService: VotingService
  ) { }

  ngOnInit() {
    this.subscription = this.votingService.getItemVotes(this.idItem)
      .subscribe(votes => {
        if (this.idUser) { this.userVote = votes[this.idUser]; }
        // sum of votes
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  upVote() {
    let vote = this.userVote === 1 ? 0 : 1;
    this.votingService.updateUserVote(this.idItem, this.idUser, vote);
  }

  downVote() {
    let vote = this.userVote === -1 ? 0 : -1;
    this.votingService.updateUserVote(this.idItem, this.idUser, vote);
  }

}
