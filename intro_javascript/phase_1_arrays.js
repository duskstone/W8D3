//Array class

Array.prototype.uniq = function(){
    let unq = [];
    this.forEach(ele => { 
        if(!unq.includes(ele)){unq.push(ele)} 
    });
    return unq;
}

Array.prototype.twoSum = function(){
    let result = [];
    let i = 0;
    while (i < this.length) {
        let j = 0; 
        while (j < this.length ){
            if ((this[i] === -this[j]) && (j > i)) {
                result.push([i, j]);
            }
        j++;   
        }
    i++;
    }
    return result;
}

Array.prototype.transpose = function () {
    let result = new Array(this[0].length);

    for( var k = 0; k < result.length; k++) {
        result[k] = []
    }


    let i = 0;
    while (i < this.length) {
        let j = 0;
        while (j < this[i].length) { 
            result[j].push(this[i][j]);
            j++;
        }
        i++;
    }
    return result;
}

