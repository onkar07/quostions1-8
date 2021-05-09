var ary = [1,2,3,4,5,6,,7,8,5,4,2,11,23,4,5,6,78,,44,55,66,77,88,99,01,13,17,16];

//Method 1
ary.forEach(even);
function even(eachNum){
    if(eachNum%2 == 0)
    console.log(eachNum)
}

//Method 2
for(var i=0; i<ary.length; i++){
    if(ary[i]%2 == 0){
        console.log(ary[i])
    }
}