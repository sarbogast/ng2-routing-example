import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ub-benefit-ict',
  templateUrl: './benefit-ict.component.html',
  styleUrls: ['./benefit-ict.component.scss']
})
export class BenefitIctComponent implements OnInit {

  devices = [
    { src: '/my/benefits/ict/iPhone7-black.jpg', model: 'Apple iPhone 7 (black)', price: 995, units: 995 },
    { src: '/my/benefits/ict/iPhone7-silver.jpg', model: 'Apple iPhone 7 (silver)', price: 995, units: 995 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
