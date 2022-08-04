var twoSum = function(nums, target) {
    let start = 0;
    let pointer = 1;
    
    while(start < nums.length){
        if((nums[start] + nums[pointer]) == target)
        {
            return [start,pointer]
        }else{
            pointer++;       
        }
        if(pointer == nums.length - 1){
            start++;
        }  
        
    }
};

console.log(twoSum([3,2,3],6))