//8
const nested = (a,b) => {
    function cuadrado(x) {
      return x * x;
    }
    return cuadrado(a) + cuadrado(b);
  }
module.exports = nested  