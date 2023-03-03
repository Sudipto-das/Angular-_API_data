import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipePipe implements PipeTransform {

  transform(items: any[], searchTerm: any): any[] {
    if (!items) return [];
    if (!searchTerm) return items;
    searchTerm = searchTerm.toLowerCase();
    return items.filter(item => {
      return item.food_name.toLowerCase().includes(searchTerm);
    });
  }

}
