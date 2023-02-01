interface IProduct {
    name: string;
    price: number;
    isActive: boolean;
}

interface IShopService {
    products: IProduct[];
    productsCount: number;

    addProduct(product: IProduct): boolean;
    sellProduct(productName: string): void;
}

class ShopService implements IShopService {

    private _products: IProduct[] = [];

    constructor() { }

    public get products(): IProduct[] {
        return this._products;
    }

    // no setter to keep it readonly
    // public set products(value: IProduct[]) {
    //     this._products = value;
    // }

    public get productsCount(): number {
        return this._products.length;
    }

    public addProduct(product: IProduct): boolean {
        if (this._products === null || this._products === undefined) {
            return false;
        }
        else {
            this._products.push(product);
            return true;
        }
    }

    public sellProduct(productName: string): void {
        const productToDeleteIndex: number = this._products
            .findIndex((prod: IProduct) => prod.name === productName);

        if (productToDeleteIndex > -1) {
            this._products.splice(productToDeleteIndex, 1);
        }
    }
}

const shop: ShopService = new ShopService();
if (shop.addProduct({
    name: "Coke",
    price: 10,
    isActive: true
})) {
    console.log("Added successfully");
}
else {
    console.log("Adding product failed");
}

console.log(`Products count: ${shop.productsCount}`);

shop.sellProduct("Bla bla"); // no such product

console.log(`Products count: ${shop.productsCount}`);

shop.sellProduct("Coke");

console.log(`Products count: ${shop.productsCount}`);
