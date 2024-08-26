var reverseVowels = function(s) {
    let left = 0;
    let right = s.length-1;
    let arr = s.split('');
    while(left<right){
        if(!/[aeiouAEIOU]/.test(s[left])){
            left++;
        }
        else if(!/[aeiouAEIOU]/.test(s[right])){
            right--;
        }
        else{
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join('');
};