function saldoDeMesesComLucro(lista){
    let saldo = [];
    for(let i = 0; i < lista.length; i++){
        if(lista[i] > 0){
            saldo.push(lista[i]);
            console.log(saldo);
        } 
    }
    return saldo;
}

console.log(saldoDeMesesComLucro([10, -10, 2, 100]));
console.log([10, -10, 2, 100]); 
