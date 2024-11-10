import db from "../db/db.js"
import { addDoc, collection } from "firebase/firestore"

const products = [
    {
      nombre: "Aceite de Oliva",
      precio: 12000,
      stock: 5,
      categoria: "almacen",
      imagen:"/img/aceitenicolas2.jpeg",
      descripcion: "Aceite de oliva extra virgen de la más alta calidad, ideal para aderezar ensaladas y cocinar."
    },
    {
      nombre: "Banana",
      precio: 1820,
      stock: 20,
      categoria: "fruta",
      imagen:"/img/bananas.png",
      descripcion: "Bananas frescas y dulces, perfectas como snack saludable o para añadir a batidos."
    },
    {
      nombre: "Harina Finca Paraiso",
      precio: 2500,
      stock: 8,
      categoria: "almacen",
      imagen:"/img/harinafincaparaiso.jpg",
      descripcion: "Harina de trigo de alta calidad, ideal para la elaboración de pan y repostería."
    },
    {
      nombre: "Manzana Roja",
      precio: 1620,
      stock: 15,
      categoria: "fruta",
      imagen:"/img/mazanaroja.png",
      descripcion: "Jugosas y crujientes manzanas rojas, perfectas para comer solas o en ensaladas."
    },
    {
      nombre: "Naranja",
      precio: 1100,
      stock: 170,
      categoria: "fruta",
      imagen:"/img/naranja.png",
      descripcion: "Naranjas frescas y dulces, ideales para hacer jugos naturales o disfrutar como snack."
    },
    {
      nombre: "Soja",
      precio: 3000,
      stock: 100,
      categoria: "almacen",
      imagen:"/img/soja.jpg",
      descripcion: "Granos de soja de alta calidad, perfectos para hacer leches vegetales o añadir a ensaladas."
    },
    {
      nombre: "Tomate",
      precio: 1900,
      stock: 12,
      categoria: "verdura",
      imagen:"/img/tomate.png",
      descripcion: "Tomates frescos y jugosos, ideales para ensaladas, salsas y guisos."
    },
    {
      nombre: "Verdeo",
      precio: 2500,
      stock: 6,
      categoria: "verdura",
      imagen:"/img/verdeo.png",
      descripcion: "Verdura fresca y aromática, perfecta para añadir sabor a tus platos."
    },
    {
      nombre: "Zanahoria",
      precio: 970,
      stock: 14,
      categoria: "verdura",
      imagen:"/img/zanahoria.png",
      descripcion: "Zanahorias crujientes y dulces, perfectas para comer solas, en ensaladas o en jugos."
    },
  ]
  

  const seedProducts = () => {
    const productRef = collection(db, "products")
    products.map(({...dataproduct}) => {
        addDoc(productRef, dataproduct)
    })
    console.log ("producto subido")
    return
  }
  seedProducts()