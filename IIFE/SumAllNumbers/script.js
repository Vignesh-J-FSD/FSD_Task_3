let arr = [1, 2, 30, 46, 5];

var sum_all = (function(arr){
    let sum = 0;
    for(var i of arr){
        sum += i;
    }

    return sum;
})(arr);

console.log(sum_all);