Array.prototype.bubbleSort = function() {
    let sorted = false

    while(!sorted){
        sorted = true;
        let b = 0;
        this.forEach((element, i) => {
            if(this[i] > this[i+1]){
                b = this[i];
                this[i] = this[i+1];
                this[i+1] = b;
                sorted = false;
            }
        }); 
    
    }

    return this;
}

String.prototype.substrings = function(){
    let result = [];
    let i = 0;
    while(i < this.length){
        let j = 0;
        while (j< this.length) {
            if(j>i){result.push(this.slice(i,j));}
            j++;
        }
        i++;
    }
    return result;
}
