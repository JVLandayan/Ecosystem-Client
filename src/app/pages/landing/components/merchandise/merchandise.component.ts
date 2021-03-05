import { Component, OnInit } from '@angular/core';
import { Merchandise } from 'src/app/shared/models/merchandise.model';
import { LandingService } from 'src/app/shared/services/landing.service';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.css'],
})
export class MerchandiseComponent implements OnInit {
  merch_list: Merchandise[];

  constructor(private landingService: LandingService) {
    this.landingService.FETCH_merchandise().subscribe((merchdata) => {
      this.merch_list = merchdata;
    });
  }

  ngOnInit(): void {}
}
