function sumUsingForLoop(myArray) {
    var sum = 0;
    for(var i=0; i<myArray.length; i++){
        sum += myArray[i];
    }
    alert("Array is: " + myArray + " array sum is: " + sum);
}

function sumUsingWhile(myArray) {
    var sum = 0, i = 0;
    while (i!=myArray.length) {
        sum += myArray[i];
        i++;
    }
    alert("Array is: " + myArray + " array sum is: " + sum);
}

function sumUsingDoWhile(myArray) {
    var sum = 0, i = 0;
    do {
        sum += myArray[i];
        i++;
    } while (i!=myArray.length);
    alert("Array is: " + myArray + " array sum is: " + sum);
}
