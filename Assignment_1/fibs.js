function fib(n) {
    let a = 0;
    let b = 1;
    let arr = [0];
  
    for (let i = 2; i <= n; i++) {
      let c = a + b;
      arr.push(b);
      a = b;
      b = c;
      
    }
  
    return arr;
  }