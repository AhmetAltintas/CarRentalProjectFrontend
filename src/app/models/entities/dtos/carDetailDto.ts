import { CarImage } from "../carImage";

export interface CarDetailDto{
    id:number;
    modelName:string;
    brandName:string;
    colorName:string;
    brandId:number;
    colorId:number;
    modelYear:number;
    dailyPrice:number;
    description:string;
    minFindeksScore:number;
    carImages:CarImage[];
}