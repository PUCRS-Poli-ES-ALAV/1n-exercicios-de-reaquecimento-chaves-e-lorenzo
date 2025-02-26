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

console.log(reverse('hello'));
console.log(add([1, 2, 3, 4]));
console.log(multiply([1, 2, 3, 4]));
console.log(isPalindrome('hello'));