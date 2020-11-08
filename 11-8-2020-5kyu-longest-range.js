function mysteryRange(s, n) {
  for (var i = 1; i < 100; i++) {
    var s1 = Array.from({ length: n }, (_, k) => k + i).join('');
    var temp = [...s1].sort().join('');
    if (temp === [...s].sort().join('')) {
      if (s.indexOf(i) >= 0 && s.indexOf(i + n - 1) >= 0) return [i, i + n - 1];
    }
  }
}

console.log(mysteryRange('13161820142119101112917232215', 15));
