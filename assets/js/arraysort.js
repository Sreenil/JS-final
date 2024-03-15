function bubbleSort(arr) {
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}

const arr = [2, 8, 1, 10, 7, 5, 3, 6, 9, 4];

bubbleSort(arr);