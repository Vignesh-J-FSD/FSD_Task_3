let arr = [3, 7, 4, 2, 5, 6, 1, 9];
let k = 3;

var rotate_array = (function (arr, k){
    for(i=0; i<k; i++){
        var x = arr[arr.length-1];
        for (j=arr.length-1; j>0; j--){
            var temp=arr[j];
            arr[j] = arr[j-1];
            arr[j-1]=temp;
        }
        arr[0] = x;
    }

    return arr;
})(arr, k);

console.log(rotate_array);