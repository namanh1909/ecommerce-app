export class Product {
    id?: string;
    name: string;
    brand: string;
    price: number;
    imageUrl: string;

    constructor(id: string, name: string, brand: string, price: number, imageUrl: string) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
