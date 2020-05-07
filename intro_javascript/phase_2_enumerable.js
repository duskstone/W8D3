function double(n){
    return 2*n;
}

function SayHello(){
    console.log("hello");
}


Array.prototype.myEach = function (callback) {
    let i = 0;
    while (i < this.length) {
        callback(this[i]);
        i++;
    }
    return this;
}


Array.prototype.myMap = function(callback){
    let result = [];
    this.myEach(ele =>
        {
            result.push(callback(ele));
        });
    return result;
}

Array.prototype.myReduce = function(callback, initialValue) {
    if(!initialValue===undefined) {
        let sum = initialValue;
        this.myEach(ele => {
            sum = callback(sum, ele);
        });
        return sum;
    } else {
        let sum = this[0];
        this.slice(1, this.length).myEach(ele => {
            sum = callback(sum, ele);
        });
        return sum;
    }
    
}

