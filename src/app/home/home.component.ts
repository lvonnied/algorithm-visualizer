import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayService } from '../services/array.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  randomArray: number[] = [];

  constructor(private arrayService: ArrayService) { }

  ngOnInit() {
    this.arrayService.currentArray$.subscribe(array => {
      this.randomArray = array;
    });
  }
}
