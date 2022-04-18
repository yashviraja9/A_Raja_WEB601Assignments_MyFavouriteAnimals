import { ApplicationRef, Component, Inject, Input, OnInit } from '@angular/core';
import { Animals } from './helper-files/content-interface';
import { LogUpdateService } from './services/log-update.service';
import { AnimalService } from './services/animal.service';
import { SwUpdate } from '@angular/service-worker';
import { concat, first, interval } from 'rxjs';
import {MatSnackBar, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'A_Raja_MyFavouriteAnimals';
  getOneAnimal: any;
  arrayOfAnimals!: Animals[]; 
    
  constructor(private AnimalService : AnimalService, private logService: LogUpdateService,
    private appRef: ApplicationRef, private updates: SwUpdate,
    private _snackBar: MatSnackBar) { 
      this.title = 'Made a change for service worker to notice';
  }

  ngOnInit(): void {
    this.logService.init();

    const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
    const everyHour$ = interval(1 * 60 * 60 * 1000);
    const everyHourOnceAppIsStable$ = concat(appIsStable$, everyHour$);
    everyHourOnceAppIsStable$.subscribe(() => this.updates.checkForUpdate());
    // this.checkUpdate();
  }

  // openSnackbar() {
  //   const snack = this._snackBar.open('Update Available', 'Install Now!', { duration: 10000 });

  //   snack
  //     .onAction()
  //     .subscribe(() => {
  //       window.location.reload();
  //     });
  //   if(snack.afterDismissed()){
  //     console.log('afterDismissed: ', snack.afterDismissed())
  //     // here the button should become available for a manual update by the user
  //   } else {
  //     console.log('else: ', snack)
  //   }
  // }

  // checkUpdate() {
  //   const appIsStable$ = this.appRef.isStable.pipe(
  //     first(isStable => isStable === true)
  //   );
  //   const everySixHours$ = interval(300000);
  //   const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

  //   everySixHoursOnceAppIsStable$.subscribe(() => {
  //     this.updates.checkForUpdate().then(() => console.log('Checked!'));
  //     if (this.updates.versionUpdates.subscribe(() => this.openSnackbar())) {
  //       this.openSnackbar();
  //     } else {
  //       console.log('No update found!');
  //     }
  //     console.log('Update checked!');
  //   });
  // }
}
