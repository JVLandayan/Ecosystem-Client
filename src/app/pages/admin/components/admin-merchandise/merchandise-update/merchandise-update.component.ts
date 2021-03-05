import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-merchandise-update',
  templateUrl: './merchandise-update.component.html',
  styleUrls: ['../../../admin.component.css'],
})
export class MerchandiseUpdateComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute
  ) {}
  form: FormGroup;
  id: number;
  imageSrc: string;
  selectedFile: File = null;

  ngOnInit(): void {
    this.form = new FormGroup({
      image: new FormControl(null, { validators: [Validators.required] }),
      item_name: new FormControl(null, { validators: [Validators.required] }),
      item_link: new FormControl(null, { validators: [Validators.required] }),
      item_details: new FormControl(null, {
        validators: [Validators.required],
      }),
    });

    this.id = this.route.snapshot.params['id'];
    this.adminService.GET_merch(this.id).subscribe(
      (data) => {},
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
    userData.append('item_name', f.value.item_name);
    userData.append('item_link', f.value.item_link);
    userData.append('item_details', f.value.item_details);

    //Data being posted = formData
    this.adminService
      .UPDATE_merch(userData, this.route.snapshot.params['id'])
      .subscribe(
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
