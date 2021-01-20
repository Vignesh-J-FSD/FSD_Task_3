let arr = ['apple', 'ball', 'cow', 'dog', 'elephant'];

(function(arr){
    for(var i of arr){
        console.log(i.charAt(0).toUpperCase() + i.substr(1).toLowerCase());
    }
})(arr);