let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},   
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]

//1. Ordernar los pokemons por base_damage de menor a mayor.
pokemons.sort(function (a, b) {
    if (a.base_damage > b.base_damage) {
      return 1;
    }
    if (a.base_damage < b.base_damage) {
      return -1;
    }
    return 0;
  });

  console.log(pokemons.sort());
//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.
function filtrar(pokemons, attributo) {
    return pokemons.filter(pokemons => pokemons[attributo]);
  }
  let filteredPpkemones = filtrar(pokemons);
  function ordenar(pokemons, attributo) {
    return pokemons.sort((a, b) => {
      if (a[attributo] < b[attributo]) {
        return -1;
      }
      if (a[attributo] > b[attributo]) {
        return 1;
      }
      return 0;
    });
  }
  let verOrden = ordenar(pokemons, "type");
  console.log(verOrden)

  //3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.
function filtrarPokemons(atributo, valor){
   return pokemons.filter(pokemons => pokemons[atributo] === valor)
}
    console.log(filtrarPokemons("type","fire"))

//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.
let pokemonMaster = {
  id: 01,
  name: 'Ash Ketchum',
  created_date: '01/01/2000',
  pokemon: [
    {name: 'Pikachu',type: 'electric'},
  ]
};
 console.log(pokemonMaster.pokemon)

 //5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.
 
 function addRandomPokemon(pokemonMaster) {
  let possiblePokemons = [
    {name: 'Charmander', type: 'fire'},
    {name: 'Squirtle', type: 'water'},
    {name: 'Bulbasaur', type: 'leaf'},
    {name: 'Pidgey', type: 'air'},
    {name: 'Goldeen', type: 'water'},
    {name: 'Bellsprout', type: 'leaf'},
    {name: 'Magnemite', type: 'electric'},
    {name: 'Ponyta', type: 'fire'},
    {name: 'Eevee', type: 'normal'},
  ];
  let randomIndex = Math.floor(Math.random() * possiblePokemons.length);
  pokemonMaster.pokemon.push(possiblePokemons[randomIndex]);
}
addRandomPokemon(pokemonMaster)
console.log(pokemonMaster)

 //6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5
function agregarDamage(pokemons) {
  for (let i = 0; i < pokemons.length; i++) {
    let pokemon = pokemons[i];

    let min_damage = Math.floor(Math.random() * 2) + 1;
    let max_damage = Math.floor(Math.random() * 3) + 3;

    pokemon.min_damage = min_damage;
    pokemon.max_damage = max_damage;
  }
}
agregarDamage(pokemons);
console.log(pokemons)

//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage


  //8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. Colocar tres pokemons con la funcion del ejercicio 5.// El quiere que sus pokemons se ordenen de manera que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.
  function ordenPokemonsMayor(argument = "daño") {
    let validInput = ["daño", "base_damage", "base_hp", "speed"];
    if (validInput.includes(argument)) {
        atributos();
        for (let i = 0; i < pokemons.length; i++) {
        let seleccionaPokemon = pokemons[i];
        pokemons[i]["daño"] =
            seleccionaPokemon.base_damage + seleccionaPokemon.max_damage;
        }
        let result = pokemons.sort((a, b) => b[argument] - a[argument]);
        console.log(result);
    } 
    }
 
//9. Crear una lista desordenada de Pokemons en nuestro documento HTML
const root = document.getElementById("root")
    const ul = document.createElement('ul')
    root.append(ul)
    
    pokemons.forEach(pokemon => {
        const li = document.createElement('li')
        li.textContent = pokemon.name
        ul.append(li)
    })
 
//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed
const root3 = document.getElementById("root")
const table = document.createElement('table')
table.setAttribute('border', '5')
root.append(table)


const tr = document.createElement("tr")
table.append(tr)
let headers = Object.keys(pokemons[0])

for(index in headers){
    const th = document.createElement("th")
    th.textContent = headers[index]
    tr.append(th)
}
    for(let i=0; i<pokemons.length; i++){
        const trb = document.createElement("tr")
        const values = Object.values(pokemons[i])

        for(let j=0; j<values.length; j++){
            const tdb = document.createElement("td")
            tdb.textContent = values[j]
            trb.append(tdb)
        }
        table.append(trb)
    }
