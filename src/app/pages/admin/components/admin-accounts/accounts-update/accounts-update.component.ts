import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-accounts-update',
  templateUrl: './accounts-update.component.html',
  styleUrls: ['../../../admin.component.css'],
})
export class AccountsUpdateComponent implements OnInit {
  form: FormGroup;
  imageSrc: string;
  selectedFile: File = null;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute
  ) {}

  id: number;
  ngOnInit(): void {
    this.form = new FormGroup({
      image: new FormControl(null, { validators: [Validators.required] }),
      last_name: new FormControl(null, { validators: [Validators.required] }),
      first_name: new FormControl(null, { validators: [Validators.required] }),
      middle_name: new FormControl(null, { validators: [Validators.required] }),
      ust_email: new FormControl(null, { validators: [Validators.required] }),
    });

    this.id = this.route.snapshot.params['id'];
    this.adminService.GET_account(this.id).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onImageSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [image] = event.target.files;
      reader.readAsDataURL(image);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.form.patchValue({
          fileSource: reader.result,
        });
      };
    }
  }

  onSubmit(f: NgForm) {
    const userData = new FormData();
    userData.append('image', this.selectedFile, this.selectedFile.name);
    userData.append('first_name', f.value.name_first);
    userData.append('last_name', f.value.name_last);
    userData.append('middle_name', f.value.name_middle);
    userData.append('ust_email', f.value.ust_email);

    //Data being posted = formData
    this.adminService.UPDATE_account(userData).subscribe(
      (event) => {
        console.log(event);
      },
      (error) => {
        console.log(error);
      }
    );
    this.form.reset();
  }
}
