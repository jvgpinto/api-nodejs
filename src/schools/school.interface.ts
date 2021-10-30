export interface BaseSchool{
    name:string;
    description: string;
    image: string;
    coordinates: {latitude: number, longitude: number};
    city: string;
    province: string;
    adresse: string;
    postalCode: string;
    phone: string;
    website:string;
    niveau:string;  

}
export interface School extends BaseSchool{
    id: number;
}