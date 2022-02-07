import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { KidListComponent } from './components/kid-list/kid-list.component';
import { PrizesComponent } from './prizes/prizes.component';

const routes: Routes = [
  { path: '', component: KidListComponent },
  { path: `detail/:id`, component: DetailComponent },
  { path: 'prizes', component: PrizesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
