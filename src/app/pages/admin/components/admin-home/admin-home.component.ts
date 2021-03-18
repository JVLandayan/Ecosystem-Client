import { NgIf } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { Useraccount } from 'src/app/shared/models/useraccount.model';
import { AdminService } from 'src/app/shared/services/admin.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['../../admin.component.css'],
})
export class AdminHomeComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private authService: AuthService
  ) {}
  user: Useraccount;
  currentUser: User = this.authService.currentUserValue;
  photoApiUrl = environment.apiphotoURl;

  form: FormGroup;
  imageSrc: string;
  selectedFile: File = null;
  PhotoFileName: string;
  PhotoFilePath: string;

  //edit modes
  EditmodeImage = false;
  Editmodepass = false;
  switchModeEditProfile() {
    this.EditmodeImage = !this.EditmodeImage;
  }

  switchModeChangePass() {
    this.Editmodepass = !this.Editmodepass;
  }

  exitEdit() {
    this.EditmodeImage = false;
    this.Editmodepass = false;
    this.ngOnInit;
  }

  ngOnInit(): void {
    this.adminService.GET_account(this.currentUser.id).subscribe((data) => {
      this.user = data;
      console.log(data);
    });
    this.form = new FormGroup({
      password_new: new FormControl(null, {
        validators: [Validators.required],
      }),
      password_new_confirm: new FormControl(null, {
        validators: [Validators.required],
      }),
      image: new FormControl(null, {
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
        this.form.patchValue({
          fileSource: reader.result,
        });
      };
    }
    const formData: FormData = new FormData();
    formData.append('uploadedFile', this.selectedFile, this.selectedFile.name);
    formData.append('extn', this.selectedFile.name.split('.').pop());
    console.log(this.selectedFile.name.split('.').pop().toLowerCase());

    this.adminService.UploadPhotoAccount(formData).subscribe((data: any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.adminService.photoUrl + this.PhotoFileName;
      console.log(this.PhotoFileName);
    });
  }

  onSubmit(f: NgForm) {
    const form_payload = [];
    if (
      f.value.password_new_confirm != null &&
      f.value.password_new != null &&
      f.value.password_new_confirm == f.value.password_new
    ) {
      form_payload.push({
        op: 'replace',
        path: '/Password',
        value: f.value.password_new,
      });
    }
    if (this.PhotoFileName != null) {
      form_payload.push({
        op: 'replace',
        path: '/PhotoFileName',
        value: this.PhotoFileName,
      });
    }

    this.adminService
      .UPDATE_account(form_payload, this.currentUser.id)
      .subscribe(
        (data) => {
          if (this.EditmodeImage) {
            alert('Profile Updated Successfully');
          } else {
            alert('Password Updated Successfully');
          }
        },
        (error) => {
          console.log(error);
        }
      );
    this.exitEdit();
  }
}
