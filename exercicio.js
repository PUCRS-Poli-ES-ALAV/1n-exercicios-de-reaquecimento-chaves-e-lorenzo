
function reverse(str) {
    if (str.length <= 1)  {
        return str;
    }
    return reverse(str.slice(1)) + str[0];
}

function add(array) {
    if (array.length === 0) {
        return 0;
    }
    return array[0] + add(array.slice(1));
}

function multiply(array) {
    if (array.length === 0) {
        return 1;
    }
    return array[0] * multiply(array.slice(1));
}

function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }

    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, str.length - 1));
}

//    1. Soma de dois números naturais, através de incrementos sucessivos (Ex.: 3 + 2 = + + (+ + + 1)).
function mul(a, b) {
  if (b == 1) return a;
  return a + mul(a, b - 1);
}

//    1. Cálculo de 1 + 1/2 + 1/3 + 1/4 + ... + 1/N.
//    Mesma coisa que começar de 1/N. Se for na ordem, dá pra usar acumulador.
function fraction_series(limit) {
  if (limit == 1) return 1;
  return 1/limit + fraction_series(limit - 1);
}

//    1. Gerador da sequência dada por:
//          * F(1) = 1
//          * F(2) = 2
//          * F(n) = 2 ∗ F(n − 1) + 3 ∗ F(n − 2).
function F(n) {
  if (n == 1) return 1;
  else if (n == 2) return 2;
  else if(n == 0) return 0;

  return 2 * F(n - 1) + 3 * F(n - 2);
}

//    1.  Gerador de Sequência de Ackerman:
//          * A(m, n) = n + 1, se m = 0
//          * A(m, n) = A(m − 1, 1), se m != 0 e n = 0
//          * A(m, n) = A(m − 1, A(m, n − 1)), se m != 0 e n != 0.
function ackerman(m, n) {
  if (m == 0) return n + 1;
  if (n == 0) {
    return ackerman(m - 1, 1);
  }
  return ackerman(m - 1, ackerman(m, n - 1));
}

//    1. Defina uma sequência de Fibonacci generalizada, de f0 a f1 como sequência
// fibg(f0, f1, 0), fibg(f0, f1, 1), fibg(f0, f1, 2), ..., onde:
//          * fibg(f0, f1, 0) = f0
//          * fibg(f0, f1, 1) = f1
//          * fibg(f0, f1, n) = fibg(f0, f1, n − 1) + fibg(f0, f1, n − 2), se n > 1.
function fibg(f0, f1, n) {
  if (n <= 0) return f0;
  if (n == 1) return f1;
  return fibg(f0, f1, n - 1) + fibg(f0, f1, n - 2);
}

function getPermutations(str) {
  if (str.length === 1) return [str];
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    const remainingPerms = getPermutations(remaining);
    for (const perm of remainingPerms) {
      result.push(letter + perm);
    }
  }
  return result;
}

function combine(n) {
  let letters = "";
  for (let i = 0; i < n; i++) {
    letters += String.fromCharCode(65 + i);
  }
  const permutations = getPermutations(letters);
  return permutations;
}

console.log(reverse('hello'));
console.log(add([1, 2, 3, 4]));
console.log(multiply([1, 2, 3, 4]));
console.log(isPalindrome('hello'));
console.log(mul(3, 4))
console.log(fraction_series(2))
console.log(F(4));
console.log(ackerman(2, 2));
console.log(fibg(3, 1, 2));
console.log(combine(3));

