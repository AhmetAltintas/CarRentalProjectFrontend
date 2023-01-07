import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/entities/brand';

@Pipe({
  name: 'brandsFilter'
})
export class BrandsFilterPipe implements PipeTransform {

  transform(brands: Brand[], filterText: string): Brand[] {
    filterText=filterText?filterText.toLocaleLowerCase():filterText
    return filterText?brands.filter(b=>b.brandName.toLocaleLowerCase().indexOf(filterText)!==-1):brands
  }

}
