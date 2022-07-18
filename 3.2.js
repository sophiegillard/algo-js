
let nums1 = [1, 2, 3, 4, 5]; 
let nums2 = [100, 101, 102]; 
let sum = 0;
let moyenne= 0;

for(let elem of nums1){
    moyenne=(sum +=elem)/nums1.length;
}

console.log(moyenne);

sum=0;
for(let elem of nums2){
    moyenne=(sum +=elem)/nums2.length;
}

console.log(moyenne);

