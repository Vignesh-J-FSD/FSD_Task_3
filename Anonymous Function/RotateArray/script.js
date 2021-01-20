let arr = [5, 3, 6, 23, 65, 9];
let k = 3;

var rotate_array = function(arr){
    var x = arr[arr.length-1];
    for (j=arr.length-1; j>0; j--){
         var temp=arr[j];
         arr[j] = arr[j-1];
         arr[j-1]=temp;
    }
    arr[0] = x;
}
for(i=0; i<k; i++){
    rotate_array(arr);
}

console.log(arr);