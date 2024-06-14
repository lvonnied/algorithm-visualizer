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
      await this.quickSort(array, low, pivot - 1);
      await this.quickSort(array, pivot + 1, high);
    }
  }

  async partition(array: Bar[], low: number, high: number): Promise<number> {
    // Random pivot approach
    const pivotIndex: number = low + Math.floor(Math.random() * (high - low + 1));
    [array[pivotIndex], array[high]] = [array[high], array[pivotIndex]];

    const pivot: number = array[high].height;

    array[high].backgroundColor = '#673ab7';
    await new Promise(resolve => setTimeout(resolve, 500));

    let left: number = low;
    let right: number = high - 1;

    while (left <= right) {
      while (left <= right && array[left].height <= pivot) {
        array[left].backgroundColor = '#FF5733';
        await new Promise(resolve => setTimeout(resolve, 500));
        array[left].backgroundColor = 'black';
        left++;
      }
      while (left <= right && array[right].height >= pivot) {
        array[right].backgroundColor = '#FF5733';
        await new Promise(resolve => setTimeout(resolve, 500));
        array[right].backgroundColor = 'black';
        right--;
      }
      if (left < right) {
        [array[left], array[right]] = [array[right], array[left]];
        array[left].backgroundColor = '#90EE90';
        array[right].backgroundColor = '#90EE90';
        await new Promise(resolve => setTimeout(resolve, 500));
        array[left].backgroundColor = 'black';
        array[right].backgroundColor = 'black';
      }
    }

    [array[left], array[high]] = [array[high], array[left]];
    array[left].backgroundColor = '#90EE90';
    await new Promise(resolve => setTimeout(resolve, 500));
    array[left].backgroundColor = 'black';
    array[high].backgroundColor = 'black';

    return left;
  }

}
