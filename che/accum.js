function accum(s) {
    return s
      .split('')
      .map(function (e, i) {
        return e.toUpperCase() + e.repeat(i);
      })
      .join('-');
  }
  
  console.log(accum('ZpglnRxqenU'));
  const accum = s => s.split('').map((e, i) => e.toUpperCase() + e.repeat(i)).join('-');

console.log(accum('ZpglnRxqenU'));