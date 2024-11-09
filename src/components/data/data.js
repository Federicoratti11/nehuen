const products = [
  {
    id: "1",
    nombre: "Aceite de Oliva",
    precio: 12000,
    stock: 5,
    categoria: "almacen",
    imagen:["/img/aceitenicolas2.jpeg","/img/aceite1.jpg","/img/aceite2.jpg","/img/aceite3.jpg"],
    descripcion: "Aceite de oliva extra virgen de la más alta calidad, ideal para aderezar ensaladas y cocinar."
  },
  {
    id: "2",
    nombre: "Banana",
    precio: 1820,
    stock: 20,
    categoria: "fruta",
    imagen:["/img/bananas.png","/img/banana1.jpg","/img/banana2.jpg","/img/banana3.jpg"],
    descripcion: "Bananas frescas y dulces, perfectas como snack saludable o para añadir a batidos."
  },
  {
    id: "3",
    nombre: "Harina Finca Paraiso",
    precio: 2500,
    stock: 8,
    categoria: "almacen",
    imagen:["/img/harinafincaparaiso.jpg","/img/harina1.jpg","/img/harina2.jpg","/img/harina3.jpg"],
    descripcion: "Harina de trigo de alta calidad, ideal para la elaboración de pan y repostería."
  },
  {
    id: "4",
    nombre: "Manzana Roja",
    precio: 1620,
    stock: 15,
    categoria: "fruta",
    imagen:["/img/mazanaroja.png","/img/manzana1.jpg","/img/manzana2.jpg","/img/manzana3.jpg"],
    descripcion: "Jugosas y crujientes manzanas rojas, perfectas para comer solas o en ensaladas."
  },
  {
    id: "5",
    nombre: "Naranja",
    precio: 1100,
    stock: 170,
    categoria: "fruta",
    imagen:["/img/naranja.png","/img/naranja1.jpg","/img/naranja2.jpg","/img/naranja3.jpg"],
    descripcion: "Naranjas frescas y dulces, ideales para hacer jugos naturales o disfrutar como snack."
  },
  {
    id: "6",
    nombre: "Soja",
    precio: 3000,
    stock: 100,
    categoria: "almacen",
    imagen:["/img/soja.jpg","/img/soja1.jpg","/img/soja2.jpg","/img/soja3.jpg"],
    descripcion: "Granos de soja de alta calidad, perfectos para hacer leches vegetales o añadir a ensaladas."
  },
  {
    id: "7",
    nombre: "Tomate",
    precio: 1900,
    stock: 12,
    categoria: "verdura",
    imagen:["/img/tomate.png","/img/tomate1.jpg","/img/tomate2.jpg","/img/tomate3.jpg"],
    descripcion: "Tomates frescos y jugosos, ideales para ensaladas, salsas y guisos."
  },
  {
    id: "8",
    nombre: "Verdeo",
    precio: 2500,
    stock: 6,
    categoria: "verdura",
    imagen:["/img/verdeo.png","/img/verdeo1.jpg","/img/verdeo2.jpg","/img/verdeo3.jpg"],
    descripcion: "Verdura fresca y aromática, perfecta para añadir sabor a tus platos."
  },
  {
    id: "9",
    nombre: "Zanahoria",
    precio: 970,
    stock: 14,
    categoria: "verdura",
    imagen:["/img/zanahoria.png", "/img/zanahoria1.jpg", "/img/zanahoria2.jpg" , "/img/zanahoria3.jpg"],
    descripcion: "Zanahorias crujientes y dulces, perfectas para comer solas, en ensaladas o en jugos."
  },
  {
    id: "10",
    nombre: "Zanahoria",
    precio: 970,
    stock: 140,
    categoria: "verdura",
    imagen:["/img/zanahoria.png", "/img/zanahoria1.jpg", "/img/zanahoria2.jpg" , "/img/zanahoria3.jpg"],
    descripcion: "Zanahorias crujientes y dulces, perfectas para comer solas, en ensaladas o en jugos."
  }
];




//obetener productos
  const getProducts = () => {
return new Promise ((resolve,reject) => {
    setTimeout(() => {
        resolve(products)
    }, 2000)
})
} 

const getProduct = (idProduct) => {
  return new Promise( (resolve)=> {
    setTimeout(()=> {
      const product = products.find( (product)=> product.id === idProduct )
      resolve(product)
    }, 2000)
  })
}
export { getProducts, getProduct }