let arr = [1001, 2001, 2002, 2003, 3003, 5001, 5005];

(function(arr){
    for(var num of arr){
        let copyNumber = 0;
    let currentDigit = 0;
    let reversedNumber = 0;
    copyNumber = num;

    do{
        currentDigit = copyNumber % 10;
        reversedNumber = (reversedNumber * 10) + currentDigit;
        copyNumber = parseInt(copyNumber / 10);
    }
    while(copyNumber != 0);

    if(num == reversedNumber){
        console.log(num);
    }
    }    
})(arr);