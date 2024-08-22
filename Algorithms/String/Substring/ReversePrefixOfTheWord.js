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