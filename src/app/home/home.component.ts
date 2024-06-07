import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayService } from '../services/array.service';
import { Bar } from '../models/Bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  randomArray: Bar[] = [];
  barWidth: number = 10;

  constructor(private arrayService: ArrayService) { }

  ngOnInit() {
    this.arrayService.currentArray$.subscribe(array => {
      this.randomArray = array;
      this.calculateBarWidth();
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.calculateBarWidth();
  }

  calculateBarWidth() {
    const containerWidth = window.innerWidth * 0.60; // 99% of the window width to avoid scrollbar
    this.barWidth = containerWidth / this.randomArray.length;
  }
}
