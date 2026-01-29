let n=7;
let prime=true;
for(let i=2;i<n;i++){

        if(n % i===0){
            prime=false;
            break;
        }
    }


console.log(n>1 && prime?"Prime":"Not Prime");