import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-merchandise-add',
  templateUrl: './merchandise-add.component.html',
  styleUrls: ['../../../admin.component.css'],
})
export class MerchandiseAddComponent implements OnInit {
  form: FormGroup;
  imageSrc: string;
  selectedFile: File = null;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      image: new FormControl(null, { validators: [Validators.required] }),
      item_name: new FormControl(null, { validators: [Validators.required] }),
      item_link: new FormControl(null, { validators: [Validators.required] }),
      item_details: new FormControl(null, {
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
  }

  onSubmit(f: NgForm) {
    console.log(this.form.value);
    const merchData = new FormData();
    merchData.append('image', this.selectedFile, this.selectedFile.name);
    merchData.append('item_name', f.value.item_name);
    merchData.append('item_link', f.value.item_link);
    merchData.append('item_details', f.value.item_details);

    //Data being posted = formData
    this.adminService.POST_merch(merchData).subscribe(
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
