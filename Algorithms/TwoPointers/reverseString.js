var reverseOnlyLetters = function(s) {
    let arr = s.split('');
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (!/[a-zA-Z]/.test(arr[left])) {
            left++;
        } else if (!/[a-zA-Z]/.test(arr[right])) {
            right--;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join('');
};


//without array

var reverseOnlyLetters = function(s) {
    let left = 0;
    let right = s.length-1;
    let res = "";
    while(left<s.length){
        if(!/[a-zA-Z]/.test(s[left])){
            res += s[left];
            left++;
        }
        else if(!/[a-zA-Z]/.test(s[right])){
            right--;
        }
        else{
            res += s[right];
            left++;
            right--;
        }
    }
    return res;
};