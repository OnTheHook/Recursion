function fibsRec(n) {
    if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    }
  
    return [
      ...fibsRec(n - 1),
      fibsRec(n - 1).slice(-2)[0] + fibsRec(n - 1).slice(-2)[1],
    ];
  }