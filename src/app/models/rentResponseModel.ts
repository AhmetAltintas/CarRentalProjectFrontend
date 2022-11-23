import { Rent } from "./rent";
import { ResponseModel } from "./responseModel";

export interface RentResponseModel extends ResponseModel{
    data:Rent[];
}