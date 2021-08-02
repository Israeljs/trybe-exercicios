let array = new Array(25);
for (let i = 0; i < array.length; i++) {
    array[i] = (array[i] = i + 1) / 2;

}
console.log(array);