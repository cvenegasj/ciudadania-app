import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicWorkService } from '../../services/publicWork.service';
import { PublicWork } from '../../models/publicWork';
import { User } from '../../models/user';

@Component({
  selector: 'app-public-work-detail',
  templateUrl: './public-work-detail.component.html',
  styleUrls: ['./public-work-detail.component.scss']
})
export class PublicWorkDetailComponent implements OnInit {
  publicWork: PublicWork;
  // just for testing
  user: User;
  content: string;
  creationDateTime: Date;

  constructor(
    private route: ActivatedRoute,
    private publicWorkService: PublicWorkService
  ) { }

  ngOnInit() {
    const idPublicWork = Number(this.route.snapshot.params['idPublicWork']);
    this.publicWork = data.find(publicWork => publicWork.idPublicWork === idPublicWork);

    this.user = new User();
    this.user.fullName = 'Laura Zevallos';
    this.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
    this.creationDateTime = new Date();
    // this.publicWorkService.getPublicWork(this.route.snapshot.params['id'])
    //  .subscribe(publicWork => this.publicWork = publicWork);
  }

}

const data: PublicWork[] = [
  { idPublicWork: 1, name: 'Remodelación de Plaza de Armas de Trujillo',
  description: 'Loreem ipsumLoreem ipsumLoreem ipsum Loreem ipsumLoreem ipsum Loreem ipsum Loreem ipsum Loreem ipsumLoreem ipsum Loreem ipsumLoreem ipsum m ipsum.',
  positiveScore: 200, negativeScore: 650 },
  { idPublicWork: 2, name: 'Construcción de parque de diversiones infantil en Av. Larco',
  description: 'Loreem ipsumLoreem ipsumLoreem ipsum Loreem ipsumLoreem ipsum Loreem ipsum Loreem ipsum Loreem ipsumLoreem ipsum Loreem ipsumLoreem ipsum m ipsum.',
  positiveScore: 400, negativeScore: 760 },
  { idPublicWork: 2, name: 'Demolición de casas coloniales en el centro de Trujillo',
  description: 'Loreem ipsumLoreem ipsumLoreem ipsum.',
  positiveScore: 300, negativeScore: 1040 }
];
