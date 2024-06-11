import { Component } from '@angular/core';
import { MatToolbarRow, MatToolbar } from '@angular/material/toolbar'
import { ArrayService } from '../services/array.service';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatToolbar, MatToolbarRow, CommonModule, MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  isSorting: boolean = false;

  constructor(private arrayService: ArrayService) { }

  onLengthChange(newLength: number) {
    this.arrayService.setArrayLength(newLength);
  }

  randomizeArray() {
    this.arrayService.randomizeCurrentArray();
  }

  async mergeSort() {
    this.isSorting = true;
    await this.arrayService.mergeSort();
    this.isSorting = false;
  }
}
