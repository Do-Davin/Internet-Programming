import { Model } from 'sequelize-typescript';
export declare class Category extends Model {
    name: string;
    productCount: number;
    color: string;
    image: string;
    group: string;
}
