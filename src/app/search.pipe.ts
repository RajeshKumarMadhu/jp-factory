import { Injectable,Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(obj => obj.name.toLowerCase().indexOf(args.toLowerCase()) !== -1);
  }

}
