import { Component } from '@angular/core';
import { MatToolbarRow, MatToolbar } from '@angular/material/toolbar'
import { ArrayService } from '../services/array.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatToolbar, MatToolbarRow, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  arrayLengths = [10, 20, 30, 40, 50]; // Example lengths

  constructor(private arrayService: ArrayService) { }

  onLengthChange(event: Event) {
    const newLength = (event.target as HTMLSelectElement).value;
    this.arrayService.setArrayLength(Number(newLength));
  }
}
