import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  NgForm,
  FormBuilder,
} from '@angular/forms';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-content-add',
  templateUrl: './content-add.component.html',
  styleUrls: ['../../../admin.component.css'],
})
export class ContentAddComponent implements OnInit {
  form: FormGroup;
  selectedFile: File = null;
  imageSrc: string;
  constructor(
    private adminService: AdminService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.adminService.INIT_RTE('contentcreate');
    this.form = new FormGroup({
      post_image: new FormControl(null, { validators: [Validators.required] }),
      post_title: new FormControl(null, { validators: [Validators.required] }),
      post_content: new FormControl(null, {
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
    const content = this.adminService.DATA_RTE.get(
      'contentcreate'
    ).getContent();
    const postData = new FormData();
    postData.append('post_image', this.selectedFile, this.selectedFile.name);
    postData.append('post_title', f.value.post_title);
    postData.append('post_content', f.value.post_content);
    console.log(content);

    //Data being posted = formData
    this.adminService.POST_content(postData).subscribe(
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
