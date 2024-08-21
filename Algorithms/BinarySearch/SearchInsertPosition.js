var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let mid = Math.floor((left+right)/2);
    while(left<=right){
        mid = Math.floor((left+right)/2);
        if(target>nums[mid]){
            left = mid+1;
        }
        else if(target<nums[mid]){
            right = mid-1;
        }
        else if(target === nums[mid]){
            return mid;
        }
    }
    return left;
};

let ans = searchInsert([1,2,3,5,7,8], 4);
console.log(ans);