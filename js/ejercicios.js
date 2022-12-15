// Arreglos
 let frutas = ["Manzanas","Plátano","Mango"]
 //console.log(frutas[2])


let user ={name:"Percy"};
user.apellido = "Quispe";
user["edad"] = 25

//console.log(user["name"])
//console.log(user)
//console.log(user.apellido)

// Ejercicios 
let products = [
    { id: 1, name: "tv", description: "TV 55 Pulgadas", brand: "chanchum", type: "tech" },
    { id: 3, name: "cellphone", description: "Androy 6/128GB", brand: "chaiomi", type: "tech" },
    { id: 2, name: "tv", description: "TV 55 Pulgadas", brand: "elyi", type: "tech" },
    { id: 4, name: "tv", description: "TV 65 Pulgadas", brand: "panachonic", type: "tech" },
    { id: 5, name: "cellphone", description: "Aifon 6/256GB", brand: "apol", type: "tech" },
    { id: 6, name: "bed", description: "KingSize", brand: "paiso", type: "home" },
    { id: 10, name: "bed", description: "QueenSize", brand: "rochen", type: "home" },
    { id: 8, name: "washing machine", description: "12Lt", brand: "elyi", type: "home" },
    { id: 9, name: "washing machine", description: "10Lt", brand: "panachonic", type: "home" },
    { id: 7, name: "tv", description: "TV 75 Pulgadas", brand: "chanchum", type: "tech" },
]
 
function obtenerProductoPorId(id){
    return products.find(product => product.id === id)
}
 
 
//1. Crear una función que permita filtrar el arreglo de productos por cada atributo.
function obtenerProductosPorNombre(atributo, valor){
   return products.filter(product => product[atributo] === valor)
}
    console.log(obtenerProductosPorNombre("type","home"))

 
//2. Crear una función que permita ordenar el arreglo de productos por cada atributo (en orden alfabetico).
function filtrar(products, attributo) {
    return products.filter(product => product[attributo]);
  }
  let filteredProducts = filtrar(products);
  function ordenar(products, attributo) {
    return products.sort((a, b) => {
      if (a[attributo] < b[attributo]) {
        return -1;
      }
      if (a[attributo] > b[attributo]) {
        return 1;
      }
      return 0;
    });
  }
  let sortedProducts = ordenar(products, "name");
  console.log(sortedProducts)
  
     let array = ["uvas", "Albondigas","Manzana"]
     console.log(array.sort())

  
//3. Crear una función que permita imprimir en pantalla los datos del objeto.
    //El name, brand y type deben imprimirse en formato Capitalizado.
 
//4. Añadir el atributo price a cada objeto. Para añadirlo utilizar un numero aleatorio entre 500 y 1500 para cada uno.
 
//5. Crear una función que me permita filtrar productos por precio, ingresando tambien el parametro mayor o menor que.
 
//6. Crear una función que me permita crear un nuevo objeto, ingresando los datos con prompts.
 
//7. Crear una función que me permita modificar los atributos de un objeto que haya seleccionado.
 
//8. Crear una función que me borrar uno o varios productos de mi arreglo según los valores de sus atributos.



