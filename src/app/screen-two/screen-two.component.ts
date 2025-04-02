import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-screen-two',
  templateUrl: './screen-two.component.html',
  styleUrls: ['./screen-two.component.scss'],
  standalone: false
})
export class ScreenTwoComponent implements OnDestroy {
  // Add any logic or properties here if needed
  constructor(){}

  ngOnDestroy(): void {
  }
}
