import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-content-update',
  templateUrl: './content-update.component.html',
  styleUrls: ['../../../admin.component.css'],
})
export class ContentUpdateComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.INIT_RTE;
  }
}
