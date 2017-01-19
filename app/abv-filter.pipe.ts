import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({name: 'abvFilter'})

export class AbvFilterPipe implements PipeTransform {
  transform(kegList: Keg[], direction: string): Keg[] {
    let filteredKegList: Keg[];

    switch (direction) {
      case 'lowToHigh':
        filteredKegList = kegList.sort(function (kegA: Keg, kegB: Keg) {
          return kegA.abv - kegB.abv;
        });
        break;
      case 'highToLow':
        filteredKegList = kegList.sort(function (kegA: Keg, kegB: Keg) {
          return kegB.abv - kegA.abv;
        });
        break;
      default:
        break;
    }
    return filteredKegList;
  }
}
