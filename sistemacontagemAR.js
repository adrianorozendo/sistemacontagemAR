let numeroDeAlunos = 10;

let contador = 0;

while(contador <= numeroDeAlunos) {
    //console.log(contador) 

    if(contador == 0){
        console.log("O número atual é 0")
    } else if(contador % 2 != 0) {     // (!negação)
        console.log(`O número ${contador} é impar`) //concatenar + 
    } else{
        console.log( `O número ${contador} é par`) // crase "à"
    }
    contador ++ // incremento precisa ficar no final para não dar looping infinito
}



// for (let contador = 0; contador <= numeroDeAlunos; contador++) {
//     //console.log(contador) 

//     if(contador == 0){
//         console.log("O número atual é 0")
//     } else if(contador % 2 == 0) {
//         console.log(`O número ${contador} é par`) //concatenar + 
//     } else{
//         console.log( `O número ${contador} é impar`) // crase "à"
//     }
// }