import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/useraccount.model';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['../../../admin.component.css'],
})
export class AccountsListComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  accounts_list: User[] = [];

  ngOnInit(): void {
    this.adminService.GET_accounts().subscribe((data) => {
      this.accounts_list = data;
    });
  }

  onDeleteAccount(id) {
    this.adminService.DELETE_account(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}
