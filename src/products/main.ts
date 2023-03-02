import { addProduct, calcStock, products } from "./product.service";

addProduct(
  {
  id: '1',
  name: "Product 1",
  description: "Product 1 description",
  price: 1.00,
  category: "Category 1",
  stock:10
}
)
addProduct(
  {
  id: '2',
  name: "Product 2",
  description: "Product 2 description",
  price: 1.00,
  category: "Category 2",
  stock:10
}
)

// console.log('Productos ',{products})

console.log(calcStock());

