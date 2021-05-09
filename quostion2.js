ary=[1,2,3,4,6,1,1,3,4,5,5,6,7,1,1,1,1,1,1]
var count = 0;
var max = 0;
for(var i=0; i<=ary.length; i++){
    if(ary[i] === ary[i+1] && ary[i] === 1){
        ++count;
    }
    if(ary[i] != 1){
        if(max <= count)
            max = count;
        count = 0;
    }
}
console.log(max);