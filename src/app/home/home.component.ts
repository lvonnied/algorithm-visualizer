import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  randomArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {
  }

  ngOnInit() {
    this.generateRandomArray();
  }

  generateRandomArray() {
    this.randomArray = this.randomArray.map(() => Math.floor(Math.random() * 750) + 1);
  }
}
