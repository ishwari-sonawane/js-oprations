function multiplyByTwo(arr){
    let abc=arr.map((elem) =>  {
        return elem*2;
    });
    return abc;
    
    }
    
    
    var result=multiplyByTwo(arr=[1,2,3,4,5]);
    console.log(result);