import { Component, OnInit } from '@angular/core';
import { Merchandise } from 'src/app/shared/models/merchandise.model';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-merchandise-list',
  templateUrl: './merchandise-list.component.html',
  styleUrls: ['../../../admin.component.css'],
})
export class MerchandiseListComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  merch_list: Merchandise[] = [];

  ngOnInit(): void {
    this.adminService.GET_merchs().subscribe((data) => {
      this.merch_list = data;
    });
  }

  onDeleteMerch(id: number) {
    this.adminService.DELETE_merch(id).subscribe(
      (data) => {
        this.ngOnInit();
      },
      (error) => {
        window.prompt('An error has occured, error type: ' + error);
      }
    );
  }
}
