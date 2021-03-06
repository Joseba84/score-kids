import { Component } from '@angular/core';
import { Kid } from './models/kid';
import { KidsService } from './services/kids.service';
import { getImageUrl } from './helpers';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
    this.router.navigate([`/detail/${this.currentId}`, { id: this.currentId, foo: 'foo' }]);
  }

  getImageUrl(image: string): string {
    return getImageUrl(image);
  }
}
