import { Component, Input, OnInit } from '@angular/core';
import {
  faDatabase,
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() user: any;
  faDatabase = faDatabase;
  faEnvelope = faEnvelope;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  constructor() {}

  ngOnInit(): void {}
}
