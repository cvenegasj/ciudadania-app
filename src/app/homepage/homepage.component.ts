import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { Governor } from '../models/governor';
import { GovernorService } from '../services/governor.service';
import { Institution } from '../models/institution';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: [ './homepage.component.scss' ]
})
export class HomepageComponent implements OnInit {

  mainSearch: FormControl = new FormControl();
  governors: Governor[] = [];

  filteredOptions: Observable<Governor[]>;

  INSTITUTIONS: Institution[] = [
    { idInstitution: 1, name: 'Municipalidad Provincial de Trujillo', category: 'Municipalidad', photo: '' },
    { idInstitution: 2, name: 'Municipalidad Provincial de Lima', category: 'Municipalidad', photo: '' },
    { idInstitution: 3, name: 'Municipalidad Provincial de Chiclayo', category: 'Municipalidad', photo: '' }
  ];

  constructor(
    public router: Router,
    private governorService: GovernorService
  ) { }

  ngOnInit() {
    this.governorService.getGovernors()
      .subscribe(governors => this.governors = governors);

    this.filteredOptions = this.mainSearch.valueChanges
       .startWith(null)
       .map(val => val ? this.filter(val) : this.governors.slice());
  }

  filter(val: string): Governor[] {
    return this.governors.filter(governor =>
      governor.fullName.toLowerCase().indexOf(val.toLowerCase()) !== -1);
  }

  showGovernorDetail($event: any, g: Governor) {
    this.router.navigate(['/funcionarios', g.idGovernor]);
  }

}
