import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: [ './complaints.component.scss' ]
})
export class ComplaintsComponent {

  constructor(
    private route: ActivatedRoute
  ) { }

}
