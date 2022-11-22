Array.prototype.uniq = function() {
    let hash = {};
    this.forEach((letter) => hash[letter] = (hash[letter] || 0) +1);
    return Object.keys(hash);
}



Array.prototype.twoSum = function(){
    let newArray = [];
    for(let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                newArray.push([i, j]);
            }  
        }
    }
    return newArray;
}

Array.prototype.twoSum = function(){
    let hash = new Map();
    let newArr = [];
    for(let i = 0; i < this.length; i++){
        hash.set(this[i], i);
        if (hash.has(-this[i]) && hash.get(-this[i]) !== i){
            newArr.push([hash.get(-this[i]), i]);
        }
    }
    return newArr;
}


Array.prototype.transpose = function(){
    let newArr = new Array(this.length);
    for(let i= 0; i < this.length; i++) {
        newArr[i] = new Array;
    }

    for (let i = 0; i < this.length; i++){
        for (let j = 0; j < this.length; j++) {
            newArr[j][i] = this[i][j];
        }
    }

    return newArr;
}


arr = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
console.log(arr.transpose()
);
