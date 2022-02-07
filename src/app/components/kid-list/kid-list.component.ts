import { Component } from '@angular/core';
import { Kid } from './../../models/kid';
import { KidsService } from './../../services/kids.service';
import { getImageUrl } from './../../helpers';
import { Router } from '@angular/router';
@Component({
  selector: 'app-kid-list',
  templateUrl: './kid-list.component.html',
  styleUrls: ['./kid-list.component.scss']
})
export class KidListComponent {
  title = 'score-kids';
  kids: Kid[] = [];
  currentId: number | undefined;

  constructor(
    private kidsService: KidsService,
    private router: Router,) {}

  ngOnInit() {
    this.kidsService.setInitialData();
    this.kids = this.kidsService.getData();
  }

  showDetail(id: number) {
    this.currentId = id;
    this.router.navigate([`/detail/${this.currentId}`]);
  }

  getImageUrl(image: string): string {
    return getImageUrl(image);
  }

  addScore(kid: Kid) {
    kid.score = kid.score + 1;
    this.kidsService.updateData(kid);
  }
}