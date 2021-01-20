let arr = [1,2,3,4,5];

var printOdd = function(arr){
    for(var i of arr){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}

printOdd(arr);