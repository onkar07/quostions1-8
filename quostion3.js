window.onload = function(){
const arr = [0,1,2,3,4,5,6,7,7,8,9,10,10];
for(var i=0; i<arr.length; i++){
    if(arr[i] === arr[i+1])
    console.log(arr[i]);
}
}

