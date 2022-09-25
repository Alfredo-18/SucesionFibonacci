const p = document.querySelector(".fib");
        
let fib = function(n){
    if(n<=1) return n; 

    return fib(n - 1) + fib(n - 2);
}

for(i = 2; i <= 10 ; i++){
    p.innerHTML +=  `El numero ${fib(i)} pertenece <br> <br>`;
};