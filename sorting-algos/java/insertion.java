class Main
{
      static void insertionSort(int arr[]){         
          for(int i = 0 ; i < arr.length ; i++){
              for(int j = i ; j > 0 ; j--){
                  if(arr[j] < arr[j - 1]){
                      int temp = arr[j-1];                  
                      arr[ j -1 ] = arr[j];
                      arr[j] = temp;
                  }
              }
          }
          
         for(int i = 0 ; i < arr.length ; i++){
             System.out.println(arr[i]);
          }
    }
    
	public static void main(String[] args) {
	    int arr[] = {2,5,7,8,4,6,3};
	    insertionSort(arr);
		
	}
}
