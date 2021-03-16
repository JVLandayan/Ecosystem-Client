import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['../../../admin.component.css'],
})
export class ContentListComponent implements OnInit {
  content_list = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.GET_contents().subscribe((data) => {
      this.content_list = data;
      console.log(data);
    });
  }

  onArticleDelete(id: number) {
    var f = confirm('Confirm Delete?');
    if (f == true) {
      this.adminService.DELETE_content(id).subscribe(() => {
        this.ngOnInit();
      });
    }
  }
}
