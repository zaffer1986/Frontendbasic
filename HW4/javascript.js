//Task 1
// let d=7;
// let f=d**2;
// let g=d**3;
// console.log(d);
// console.log(`${f}`);
// console.log(`${g}`);

//Task2
// let a=prompt(25);
// num =a*2;
// console.log(num);

//task 3
// let m=prompt(5,-5,0);
// if(m>0){
//     console.log("Positive");
// } else if(m<0){
//     console.log("negative");
// }if(m==0){
//     console.log("null")
// }

//task4

// let m=(2,15);
// let n=prompt(m);
// if(n>2){
//     k=15+2;
//     console.log(k);
// }else if(n<2){
//      l=15*2;
//     console.log(l);
// }if(n==2){
//     str="The numbers are equals";
//     console.log(str);
// }

//task 5
// let a =prompt(-4);
// let b=a**2;
// if(a<0){
//     console.log(b);
// }else {
//     console.log("fail");
// }

//task6
// let a=prompt(24,28);
// if(a>24){
//     console.log(`output: enough chair`);
// }else{
//     console.log(`output: not enough chair`)
// }

//task7
// let num=(1,2,3,4,5,6,7,8,9);
// let k=prompt("start")
// if(num>k){
//     console.log(`Start ".."1`);
// }else if(num==k){
//     console.log(`Finish ".."9`);
// }else{
//     console.log("end");
// }

//task 8
// let a =[5,10,15,20,25,30,35,40];

// for(let i=0; i<a.length;i++){
//     b=a[i]/5;
//     console.log(b);
// }

//task9
// let a=[2,3,25,17,30,4,9,11,35,56,55,63];

// for(let i=0; i<13; i++){
//     if(a[i]%2==1){
    
//     console.log(a[i]);
//     }
// }

//task10
// let a=[2,3,25,15,17,30,4,9,11,35,56,55,63];
// for(i=0; i<a.length;i++){
//     if(a[i]>=15){
//         console.log(a[i]);
//     }
    
// }

//task11
// let a=[2,3,25,17,30,4,9,11,35,56,55,63];

// for(let i=0; i<13; i++){
//     if(a[i]%2==1){
    
//     console.log(a[i]);
//     }
// }

//task12
// let a=[2,3,25,17,30,4,9,11,35,56,55,63];
// for(let i=0; i<a.length; i--){
//     if(a[i]<0){

//         console.log(a[i]);
//     }
// }

//task13
// let a=[2,3,25,17,30,4,9,11,35,56,55,63];
//    let sum=0;
// for(let i=0; i<a.length; i++){
//     sum= a[i]+sum;   
// } 
// console.log(sum);

//task14
// let a=[2,3,25,17,30,4,9,11,35,56,55,63];
// let sum=0;
// for(let i=0; i<a.length;i++){
//     if(a[i]%2==1){
//         sum=a[i]+sum;
//     }
// }
// console.log(sum);


//task 15
let a=[2,3,25,17,30,4,9,11,35,56,55,63];
let sum=0;
let sum1=0;
for(let i=0; i<a.length;i++){
    if(a[i]%1==0){
        sum=a[i]+sum;
       
    }
}
for(let j=0; j<a.length; j++){ 
        if(a[j]%2==1){
        sum1=a[j]+sum1;
       
    }
}
console.log(`Raznisa ot chetnyh i nechetnyh chisel:${sum}-${sum1}=${sum-sum1}`);
