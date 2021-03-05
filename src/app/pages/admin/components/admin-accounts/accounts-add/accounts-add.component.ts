import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-accounts-add',
  templateUrl: './accounts-add.component.html',
  styleUrls: ['../../../admin.component.css'],
})
export class AccountsAddComponent implements OnInit {
  form: FormGroup;
  imageSrc: string;
  selectedFile: File = null;

  constructor(private adminService: AdminService) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      image: new FormControl(null, { validators: [Validators.required] }),
      last_name: new FormControl(null, { validators: [Validators.required] }),
      first_name: new FormControl(null, { validators: [Validators.required] }),
      middle_name: new FormControl(null, { validators: [Validators.required] }),
      ust_email: new FormControl(null, { validators: [Validators.required] }),
    });
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
    console.log(this.form.value);
    const userData = new FormData();
    userData.append('first_name', f.value.name_first);
    userData.append('last_name', f.value.name_last);
    userData.append('middle_name', f.value.name_middle);
    userData.append('ust_email', f.value.ust_email);
    userData.append('image', this.selectedFile, this.selectedFile.name);
    const form_payload = userData;

    //Data being posted = formData
    this.adminService.POST_account(form_payload).subscribe(
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
