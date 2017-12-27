import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PageEvent } from '@angular/material';
import { PublicWork } from '../../models/publicWork';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-public-work-list',
  templateUrl: './public-work-list.component.html',
  styleUrls: [ './public-work-list.component.scss' ]
})
export class PublicWorkListComponent implements OnInit {

  dataSource: TableDataSource | null;
  @ViewChild('filter') filter: ElementRef;

  // MatPaginator Output
  pageEvent: PageEvent;
  positiveCounter1 = 145;
  negativeCounter1 = 560;
  positiveCounter2 = 545;
  negativeCounter2 = 502;
  positiveCounter3 = 11;
  negativeCounter3 = 1067;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSource = new TableDataSource();
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }

  addPositiveCounter1(event: any) {
    this.positiveCounter1++;
    console.log(this.positiveCounter1);
  }

  addNegativeCounter1(event: any) {
    this.negativeCounter1++;
  }

  addPositiveCounter2(event: any) {
    this.positiveCounter2++;
    console.log(this.positiveCounter2);
  }

  addNegativeCounter2(event: any) {
    this.negativeCounter2++;
  }

}

const data: PublicWork[] = [
  { idPublicWork: 1, title: 'Remodelación de Plaza de Armas de Trujillo',
  description: 'Loreem ipsumLoreem ipsumLoreem ipsum Loreem ipsumLoreem ipsum Loreem ipsum Loreem ipsum Loreem ipsumLoreem ipsum Loreem ipsumLoreem ipsum m ipsum.',
  positiveScore: 200, negativeScore: 650 },
  { idPublicWork: 2, title: 'Construcción de parque de diversiones infantil en Av. Larco',
  description: 'Loreem ipsumLoreem ipsumLoreem ipsum Loreem ipsumLoreem ipsum Loreem ipsum Loreem ipsum Loreem ipsumLoreem ipsum Loreem ipsumLoreem ipsum m ipsum.',
  positiveScore: 400, negativeScore: 760 },
  { idPublicWork: 2, title: 'Demolición de casas coloniales en el centro de Trujillo',
  description: 'Loreem ipsumLoreem ipsumLoreem ipsum.',
  positiveScore: 300, negativeScore: 1040 }
];

export class TableDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor() {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PublicWork[]> {
    const displayDataChanges = [
      data,
      this._filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return data.slice().filter((item: PublicWork) => {
        let searchStr = (item.title).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });
    });
  }

  disconnect() {}
}
