import { Model } from 'sequelize-typescript';
export declare class Product extends Model {
    name: string;
    rating: number;
    size: string;
    image: string;
    price: number;
    promotionAsPercentage: number;
    categoryId: number;
    instock: number;
    countSold: number;
    group: string;
}
