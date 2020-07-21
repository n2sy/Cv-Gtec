import { Pipe, PipeTransform } from '@angular/core';
import { iif } from 'rxjs';




@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStat : any): any {
    if(filterStat == '') {
      return value;
    }
    else {
      let resultServers = [];
      for(let s of value) {
        if(s['status'] == filterStat)
          resultServers.push(s); 
      }
      return resultServers;
    }
  }

}
