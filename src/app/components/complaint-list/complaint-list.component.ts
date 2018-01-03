import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: [ './complaint-list.component.scss' ]
})
export class ComplaintListComponent {

  constructor(
    private route: ActivatedRoute
  ) { }

}
