import { Component, OnInit } from '@angular/core';
import { Kid } from '../../models/kid';
import { getImageUrl } from 'src/app/helpers';
import { KidsService } from 'src/app/services/kids.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id!: number;
  kids!: Kid[];
  kid!: Kid;

  constructor(
    private kidsService: KidsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.kids = this.kidsService.getData();
    this.route.params.subscribe((params: Params) => {
      this.id = Number(params['id']);
      this.kid = this.kids.filter(kid => kid.id === this.id)[0];
    });
  }

  getImageUrl(image: string): string {
    return getImageUrl(image);
  }

  addScore() {
    this.kid.score = this.kid.score + 1;
    this.kidsService.updateData(this.kid);
  }
}

