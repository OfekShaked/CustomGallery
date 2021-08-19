import LocationModel from "./location-model";

interface ImageModel{
    imageId:number;
    title:string;
    categories:string[];
    isFavourite:boolean;
    isPrivate:boolean;
    location:LocationModel;
    base64String:string;
}
export default ImageModel;