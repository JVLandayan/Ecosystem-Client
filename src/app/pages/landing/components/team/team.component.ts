import { Component, OnInit } from '@angular/core';
import { Teams } from 'src/app/shared/models/teams.model';
import { LandingService } from 'src/app/shared/services/landing.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  team_list: Teams[] = [
    {
      member_id: 1,
      name: 'JV Landayan',
      description: 'CEO',
      facebook_link: 'https://facebook.com/jvlandayaaan',
      instagram_link: 'https://twitter.com/jvlandayaaan',
      twitter_link: 'https://instagram.com/jvlandayaaan',
      media_id: '',
    },
  ];

  constructor(private landingService: LandingService) {
    this.landingService.FETCH_teams().subscribe((team_data) => {});
  }

  ngOnInit(): void {}
}
