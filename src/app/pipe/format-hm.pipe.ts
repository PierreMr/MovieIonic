import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatHm'
})
export class FormatHmPipe implements PipeTransform {

  transform(duration: any): any {
    const hours = Math.floor(duration/60);
    let minutes: any = duration%60;
    (minutes < 10) ? minutes = "0"+minutes : minutes;

    const formattedDuration = hours + "h" + minutes + "min";

    return formattedDuration;
  }

}
