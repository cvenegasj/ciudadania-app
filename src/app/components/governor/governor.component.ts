import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { slideInOutAnimation } from '../../_animations/slide-in-out.animation';

@Component({
  selector: 'app-governor',
  templateUrl: './governor.component.html',
  styleUrls: [ './governor.component.scss' ],
  animations: [slideInOutAnimation]
})
export class GovernorComponent implements OnInit {
  routeLinks: any[];
  activeLinkIndex = -1;

  constructor(
    public router: Router
  ) {
    this.routeLinks = [
      { label: 'Obras Públicas', path: './obras', index: 0 },
      { label: 'Opiniones y quejas', path: './quejas', index: 1 }
    ];
  }

  ngOnInit(): void {
  }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }
}
