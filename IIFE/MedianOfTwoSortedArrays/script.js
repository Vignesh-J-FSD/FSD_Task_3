let arr1 = [1, 12, 15, 26, 38];
let arr2 = [2, 13, 17, 30, 45];

(function(arr1, arr2, n){
    let i = 0;
    let j = 0;
    let m1 = 0;
    let m2 = 0;

    for(k = 0; k <= n; k++){
        if(i == n){
            m1 = m2;
            m2 = arr2[0];
    
        }
        else if(j == n){
            m1 = m2;
            m2 = arr1[0];
        }
    
        if(arr1[i] <= arr2[j]){
            m1 = m2;
            m2 = arr1[i]; 
            i++;
        }
        else{
            m1 = m2;
            m2 = arr2[j];
            j++;
        }
    }

    console.log(parseInt((m1 + m2) / 2));
})(arr1, arr2, arr2.length);