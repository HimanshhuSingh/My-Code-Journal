var minimumAverage = function(nums) {
    let avg = [];
    let min = Infinity;
    nums.sort((a,b)=>a-b);
    for(let i=0;i<(nums.length/2);i++){
        avg.push((nums[i]+nums[nums.length-1-i])/2);
        min = Math.min(min, avg[avg.length-1]);
    }
    return min;
};