// Array.prototype.bubbleSort = function(){
//     for (let i = 0; i < this.length; i++) {
//         for (let j = 0; j < this.length - 1; j++) {
//             if (this[j] > this[j+1]){
//                 [this[j], this[j + 1]] = [this[j+1], this[j]];
//             }
//         } 
//     }
// }

Array.prototype.bubbleSort = function(){
    let sorted = false;
    while (!sorted){
        sorted = true;
        for (let i = 0; i < this.length; i++){
            if (this[i] > this[i + 1]) {
                [this[i], this[i + 1]] = [this[i + 1], this[i]];
                sorted = false;
            }
        }
    }
}


String.prototype.substrings = function() {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = i; j < this.length; j++) {
            newArr.push(this.slice(i, j+1));
        } 
    }
    return newArr;
}

arr = [5, 2, 9, 6, 3];
str = "Nishant"
str1 = str.substrings()
console.log(str1);