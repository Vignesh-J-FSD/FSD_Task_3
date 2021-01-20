let arr = ['apple', 'ball', 'cow', 'dog', 'elephant'];

var title_case = function(arr){
    for(var i of arr){
        console.log(i.charAt(0).toUpperCase() + i.substr(1).toLowerCase());
    }
}

title_case(arr);