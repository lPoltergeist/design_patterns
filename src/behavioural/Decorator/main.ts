import { ProductCustomizedDecorator } from "./Product/product-customized";
import { ProductDecorator } from "./Product/product-decorator";
import { ProductStampDecorato } from "./Product/product-stamp-decorator";
import { TShirt } from "./Product/t-shirt";

const tShirt = new TShirt();
const tShirtStampFront = new ProductStampDecorato(tShirt);
const customizedTShirt = new ProductCustomizedDecorator(tShirt);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(tShirtStampFront.getPrice() , tShirtStampFront.getName());
console.log(customizedTShirt.getPrice() , customizedTShirt.getName());