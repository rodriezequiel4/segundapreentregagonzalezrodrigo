const mates = [
    {tipo:"mate imperial",precio:9500 ,stock:1000},
   {tipo:"mate torpedo",precio:8000 ,stock:3000 },
   {tipo:"mate camionero",precio:6000,stock :1500},

]

for(let i= 0;i< mates.length;i++){
console.log(mates[i].tipo)
console.log(mates[i].precio)
console.log(mates[i].stock)
}

do{
let tipo =prompt("ingrese el tipo de mate")

if(isNaN(tipo)){
console.log("no definido")

}






if(mates.some(producto=>producto.tipo===tipo)){

let cantidad=prompt("Que tipo de Mate desea?")
// para buscar similitud en el tipo de mate
const producto=mates.find(producto=>producto.tipo==producto)
producto.cantidad=cantidad;

CompraUsuario.push(producto)
}
else{
console.log("El tipo de mate No existe")
}

rta =prompt("¿desea ver otro mate?si/no")

}while(rta !="no")