import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Teams } from 'src/app/shared/models/teams.model';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-teams-update',
  templateUrl: './teams-update.component.html',
  styleUrls: ['../../../admin.component.css'],
})
export class TeamsUpdateComponent implements OnInit {
  form: FormGroup;
  imageSrc: string;
  selectedFile: File = null;
  id: number;
  active_team_member: Teams;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.form = new FormGroup({
      image: new FormControl(null, { validators: [Validators.required] }),
      teams_name: new FormControl(null, { validators: [Validators.required] }),
      teams_detail: new FormControl(null, {
        validators: [Validators.required],
      }),
      teams_facebook_link: new FormControl(null, {
        validators: [],
      }),
      teams_twitter_link: new FormControl(null, {
        validators: [],
      }),
      teams_instagram_link: new FormControl(null, {
        validators: [],
      }),
    });

    this.adminService.GET_team_member(this.id).subscribe(
      (data) => {
        this.active_team_member = data;
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
    userData.append('teams_name', f.value.teams_name);
    userData.append('teams_detail', f.value.teams_detail);
    userData.append('teams_facebook_link', f.value.teams_facebook_link);
    userData.append('teams_twitter_link', f.value.teams_twitter_link);
    userData.append('teams_instagram_link', f.value.teams_instagram_link);

    const form_payload = userData;

    //Data being posted = formData
    this.adminService.UPDATE_teams_member(form_payload).subscribe(
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
