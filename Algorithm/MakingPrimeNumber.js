const nums = [1, 2, 7, 6, 4];
function solution(nums) {
    let count = 0;
 
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; i++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum=nums[i] + nums[j] + nums[k];
                if (isprime(sum)){ count += 1;}
                }
            }

    }
    return count;
}

function isprime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {return false;}
            
        }
    return num >= 2;
}