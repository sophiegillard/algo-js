
let nums1 = [1, 2, 3, 4, 5]; 
let nums2 = [100, 101, 102]; 
let sum = 0;
let moyenne= 0;


function average(a){
    for(let elem of a){
        moyenne=(sum +=elem)/a.length;
    }
    
    console.log(moyenne);
    
}
average(nums2);
