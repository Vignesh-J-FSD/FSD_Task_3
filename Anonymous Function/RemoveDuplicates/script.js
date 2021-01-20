let arr = [90, 90, 80, 70, 60, 80, 70, 50];

var remove_duplicates = function(arr){

    for(i=0; i<arr.length-1; i++){
        for(j=0; j<arr.length-1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    
    let unique_array = [arr.length];
    let k = 0;

    for(i=0; i<arr.length-1; i++){
        if(arr[i] != arr[i+1]){
            unique_array[k++] = arr[i];
        }
    }
    unique_array[k++] = arr[arr.length - 1];

    console.log(unique_array);
}

remove_duplicates(arr);