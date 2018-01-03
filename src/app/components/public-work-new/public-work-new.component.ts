import { Component, OnInit } from '@angular/core';
import { PublicWork } from '../../models/publicWork';

@Component({
  selector: 'app-public-work-new',
  templateUrl: './public-work-new.component.html',
  styleUrls: ['./public-work-new.component.scss']
})
export class PublicWorkNewComponent implements OnInit {
  publicWork = new PublicWork();
  submitted = false;
  options: Object = {
    placeholderText: 'Ingresa la descripción.',
    charCounterCount: false,
    heightMin: 180
  };
  editorContent = '';

  constructor() { }

  ngOnInit() {
  }

  savePublicWork() {
    this.submitted = true;
    console.log(JSON.stringify(this.publicWork));
  }
}
