var  fibo = [ 1, 2, 5, 9, 13, 56]
for (let i=0; i <= fibo.length; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2]
 }
 console.log(fibo)