import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['../../admin.component.css'],
})
export class AdminSettingsComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  form_image: FormGroup;
  form_password: FormGroup;
  imageSrc: string;
  selectedFile: File = null;
  user_id: number;

  ngOnInit(): void {
    //Form for account image
    this.form_image = new FormGroup({
      image: new FormControl(null, { validators: [Validators.required] }),
    });

    //Form for account password
    this.form_password = new FormGroup({
      password_old: new FormControl(null, {
        validators: [Validators.required],
      }),
      password_new: new FormControl(null, {
        validators: [Validators.required],
      }),
      password_new_confirm: new FormControl(null, {
        validators: [Validators.required],
      }),
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
        this.form_image.patchValue({
          fileSource: reader.result,
        });
      };
    }
  }

  onSubmit_image(f: NgForm) {
    const userImage = new FormData();
    userImage.append('image', this.selectedFile, this.selectedFile.name);
    const form_payload = userImage;

    //Data being posted = formData
    this.adminService.UPDATE_image(form_payload, this.user_id).subscribe(
      (event) => {
        console.log(event);
      },
      (error) => {
        console.log(error);
      }
    );
    this.ngOnInit();
  }

  onSubmit_pass(f: NgForm) {
    const userPass = new FormData();
    userPass.append('password_old', f.value.password_old);
    userPass.append('password_new', f.value.password_new);
    userPass.append('password_new_confirm', f.value.password_new_confirm);
    const form_payload = userPass;

    this.adminService.UPDATE_pass(form_payload, this.user_id).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
