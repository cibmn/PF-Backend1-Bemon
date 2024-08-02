
import productManage from "./productManage.js";

productManage.addProduct({
  title: "Producto 1",
  description: "Descripción 1",
  price: 100,
  thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
  code: "A1",
  stock: 10,
});

productManage.addProduct({
  title: "Producto 2",
  description: "Descripción 2",
  price: 200,
  thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
  code: "A2",
  stock: 10,
});

productManage.addProduct({
  title: "Producto 3",
  description: "Descripción 3",
  price: 100,
  thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
  code: "A3",
  stock: 5,
});

productManage.addProduct({
  title: "Producto 4",
  description: "Descripción 4",
  price: 400,
  thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
  code: "A4",
  stock: 8,
})


const testProducts = async () => {

    const products = await productManage.deleteProduct(1);
    console.log(products);

    
}

testProducts();


