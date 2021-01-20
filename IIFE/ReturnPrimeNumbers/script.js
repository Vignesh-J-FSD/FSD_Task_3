let arr = [13, 15, 17, 19, 21, 25, 29];

(function(arr){
    for(var num of arr){
        let count = 0;
        let n = parseInt(num/2);
        for(j=2; j<=n; j++){
            if(num % j == 0){
                count++;
            }
        }
        if(count == 0){
            console.log(num);
        }
    }
})(arr);