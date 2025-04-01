import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-screen-two',
  templateUrl: './screen-two.component.html',
  styleUrls: ['./screen-two.component.scss']
})
export class ScreenTwoComponent implements OnDestroy {
  items$ = new BehaviorSubject<any>([]);
  intervalId: any;

  actualPassNo: any = undefined;
  // Add any logic or properties here if needed
  constructor(private cdr: ChangeDetectorRef){
    this.intervalId = setTimeout(()=>{
      const arr = [];
      for(let i of [1,2,3,4,5,6,7,8]){
        arr.push(Math.random()*100);
      }
      this.actualPassNo = Math.random()*100;
      this.items$.next([{id:arr[0]}, {id:arr[1]}, {id:arr[2]}, {id:arr[3]}]  );
      this.cdr.detectChanges();
    }, 2000)
  }

  ngOnDestroy(): void {
    clearTimeout(this.intervalId);
    this.intervalId = null;
  }
}
