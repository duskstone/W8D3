function range(start,end){
    var diff = end - start;
    if(diff == 0){return [end];}
    return [start].concat(range(start+1,end));
}

function sumRec(array) {
    if(array.length == 1){return array[0];}
    return array.pop() + sumRec(array);
}

function exponent1(base, exp){
    if(exp == 0){return 1;}
    return base * exponent(base, exp-1);
}

function exponent2(base, exp) {
    if (exp == 0) { return 1; }
    if(exp % 2 == 0){
       return exponent(base, exponent/2) ** 2;
    }else{
        return base * (exponent(base, (exp-1)/2) ** 2);
    }
}

function fibonacci(n){
    if(n==1){return [1];}
    if(n==2){return [1,1];}
    let previous_fibs = fibonacci(n-1);
    let newterm = previous_fibs[previous_fibs.length - 1] + previous_fibs[previous_fibs.length - 2];
    previous_fibs.push(newterm);
    return previous_fibs;
}

function deepDup(array){
    if(Array.isArray(array)){return array;}
    let result = [];
    array.forEach(element => {
        if (Array.isArray(element)){
            result.push(deepDup(element));
        }else{
            result.push(element);
        }
    });
    return result;
}

function bsearch(array,target){
    debugger
    if(array.length === 0){ return undefined;}

    let mid = Math.floor(array.length/2);
    let left = array.slice(0, mid)
    let right = array.slice(mid, array.length)

    if(target === array[mid]){ return mid;  
    }else if(target < array[mid]){
        return bsearch(left,target);
    }else{
        if(bsearch(right, target) === undefined){
            return undefined;
        }else {
            return (mid + 1) + bsearch(right, target);
        }
    }
}

bsearch([1, 2, 3, 4, 5, 6, 7], 2);
