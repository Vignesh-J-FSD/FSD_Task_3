let arr = [1, 2, 30, 46, 5];

var smallCase = function(arr){
    let sum = 0;
    for(var i of arr){
        sum += i;
    }

    return sum;
}

let res = smallCase(arr);
console.log(res);