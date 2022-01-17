import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount',
})
export class DateCountPipe implements PipeTransform {
  transform(value: any): number {
    let today: Date = new Date();
    let todayWithNoTime: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    let dateDifference = Math.ceil(
      Math.abs(todayWithNoTime - value) / (1000 * 86400)
    );

    if (dateDifference >= 1 && todayWithNoTime > value) {
      return dateDifference;
    } else {
      return 0;
    }
  }
}
