(()=> {
  type Login =  {
    email: string,
    password: string,
  }

  let auxLog: Login = {
    email: 'Daniel@ddd.com',
    password: '123456'
  }

  const login = (data: Login) => {
    console.log(data);
  }

  login(auxLog)

  type Product = {
    id: string,
    name: string,
    description: string,
    price: number,
    category: string,
  }

  let arrayProduct: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      description: 'Product 1 description',
      price: 1,
      category: 'Category 1'
    }
  ]

  const product2: Product = {
    id: '2',
    name: 'Product 2',
    description: 'Product 2 description',
    price: 2,
    category: 'Category 2'
  }

  const addProduct = (product: Product) => {
    arrayProduct.push(product)

    console.log(arrayProduct);

  }

  addProduct(product2)


})()
