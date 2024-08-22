var reversePrefix = function(word, ch) {
    let indOfChar = null;
    for(let i=0;i<word.length;i++){
        if(word[i] === ch){
            indOfChar = i;
            break;
        }
    }
    if(indOfChar){
        let reversed = "";
        for(let i=indOfChar;i>=0;i--){
            reversed += word[i];
        }
        for(let i=indOfChar+1;i<word.length;i++){
            reversed += word[i];
        }
        return reversed;
    }
    return word;
};





//Using inbuilt methods
var reversePrefix = function(word, ch) {
    let indOfChar = null;
    for(let i=0;i<word.length;i++){
        if(word[i] === ch){
            indOfChar = i;
            break;
        }
    }
    if(indOfChar){
        let firstPart = word.substring(0,indOfChar+1).split("").reverse().join('');
        let secondPart = word.substring(indOfChar+1);
        return firstPart+secondPart;
    }
    return word;
};