import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Governor } from '../../models/governor';

@Component({
  selector: 'app-governor',
  templateUrl: './governor.component.html',
  styleUrls: [ './governor.component.scss' ]
})
export class GovernorComponent implements OnInit {
  routeLinks: any[];
  activeLinkIndex = -1;
  governor: Governor;

  constructor(
    public router: Router
  ) {
    this.routeLinks = [
      { label: 'Obras Públicas', path: './obras', index: 0 },
      { label: 'Opiniones y Quejas', path: './quejas', index: 1 }
    ];
  }

  ngOnInit(): void {
  }

}
