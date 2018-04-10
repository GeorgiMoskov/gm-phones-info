import {
  Component,
  OnInit,
  Input,
} from '@angular/core';

import {MatCardModule} from '@angular/material/card';

import { Phone } from '../models/phone';

@Component({
  selector: 'app-phone-view',
  templateUrl: './phone-view.component.html',
  styleUrls: ['./phone-view.component.css']
})
export class PhoneViewComponent implements OnInit {
  @Input() phone: Phone;

  constructor() {}

  ngOnInit() {}

}
