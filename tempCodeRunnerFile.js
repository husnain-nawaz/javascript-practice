nst revenue={};
transactions.forEach(transactions=>{
    if(revenue[transactions.patient]){
        revenue[transactions.patient]+=transactions.amount;
    }
    else{
        revenue[transactions.patient]=transactions.amount;
    }
})
console.log(revenue);