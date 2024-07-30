const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
		    let result = []
	    for(i=0; i<arr.length; i++){
	         if(arr[i] + arr[i+1] <= n){
	               result.push(arr.slice(i,i+1))
	               i++;
	         }
	         else{
	              result.push(arr.slice(i))
	         }
	         return result
	    }

};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
