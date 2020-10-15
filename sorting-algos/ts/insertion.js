// [7, 5, 2, 8, 4, 6, 3] 
// i = 3, j = 0
function insertionSort(arr) {
    var i = 1, j, temp;
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
var arr = [2, 5, 7, 8, 4, 6, 3];
console.log(insertionSort(arr));
