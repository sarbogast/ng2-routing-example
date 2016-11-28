import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ub-benefit-cash',
  templateUrl: './benefit-cash.component.html',
  styleUrls: ['./benefit-cash.component.css']
})
export class BenefitCashComponent implements OnInit {
  // Tabs sample: https://github.com/valor-software/ng2-bootstrap/blob/development/demo/components/tabs/
  monthlyTabActive = false;
  ospTabActive = false;

  constructor() {
  }

  ngOnInit() {
  }

  onClickGoTo1sp() {
    this.ospTabActive = true;
  }
  onClickGoToMonthly() {
    this.monthlyTabActive = true;
  }
}
