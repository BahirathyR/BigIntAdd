
function bigintegeradd(a,b){
    var sum=""
    var carry=0;
    var diff=b.length-a.length;
    for(i=a.length-1;i>=0;i--){
    var temp=(Number(a.charAt(i))%10)+(Number(b.charAt(i+diff)%10)+carry)
    if(temp>=10){
        sum=temp%10+sum;
        carry=Math.floor(temp/10)
    }
    else{
        sum=temp+sum;
        carry=0
    }
    }
    if(carry){
        sum=carry+sum
    }
    return(sum)
}

module.exports.bigintegeradd=bigintegeradd