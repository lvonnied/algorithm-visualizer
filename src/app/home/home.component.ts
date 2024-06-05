import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayService } from '../services/array.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  randomArray: Array<number> = [];

  constructor(private arrayService: ArrayService) { }

  ngOnInit() {
    this.arrayService.arrayLength$.subscribe(length => {
      this.generateRandomArray(length);
    });
  }

  generateRandomArray(length: number) {
    this.randomArray = Array.from({ length }, () => Math.floor(Math.random() * 100) + 1);
  }
}
