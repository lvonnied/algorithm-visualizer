import { Injectable } from '@angular/core';
import { Bar } from '../models/Bar';

@Injectable({
  providedIn: 'root'
})
export class QuickSortService {

  constructor() { }

  async quickSort(array: Bar[], low: number, high: number) {
    if (low < high) {
      const pivot: number = await this.partition(array, low, high);
      this.quickSort(array, low, pivot - 1);
      this.quickSort(array, pivot + 1, high);
    }
  }

  async partition(array: Bar[], low: number, high: number): Promise<number> {
    // Random pivot approach
    const pivotIndex: number = Math.floor(Math.random() * high) + 1;
    array[pivotIndex], array[high] = array[high], array[pivotIndex];
    const pivot: number = array[high].height;

    let left: number = low;
    let right: number = high - 1;

    while (left <= right) {
      if (array[left].height <= pivot) {
        left++;
      } else if (array[right].height >= pivot) {
        right--;
      } else {
        array[left], array[right] = array[right], array[left];
        left++;
        right--;
      }
    }

    array[left], array[high] = array[high], array[left];
    return left;
  }
}
