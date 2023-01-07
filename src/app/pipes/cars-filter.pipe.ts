import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from '../models/entities/dtos/carDetailDto';

@Pipe({
  name: 'carsFilter'
})
export class CarsFilterPipe implements PipeTransform {

  transform(carDetailDTOs: CarDetailDto[], filterText: string): CarDetailDto[] {
    filterText=filterText?filterText.toLocaleLowerCase():filterText
    return filterText?carDetailDTOs.filter(cd=>cd.modelName.toLocaleLowerCase().indexOf(filterText)!==-1):carDetailDTOs
  }

}
