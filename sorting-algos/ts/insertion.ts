// [7, 5, 2, 8, 4, 6, 3] 
// i = 3, j = 0

function insertionSort(arr: number[]): any {
    let i = 1, j, temp;
    while (i < arr.length) {
        j = i;
        while (j > 0 && arr[j - 1] < arr[j]) {
            temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j = j - 1;
        }
        i++;
    }
    return arr;
}

const arr = [2, 5, 7, 8, 4, 6, 3];
console.log('Arr', arr);
console.log(insertionSort(arr));