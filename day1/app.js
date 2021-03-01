// function make(syble){
// let sy =  Symbol(syble);
//     return {[sy]:'small'}
// }
// let mmake = make('morsalin');

// console.log(mmake)

// const sy = Symbol('mysymble');
// console.log(sy)

// my = {}

// my[sy]='morsalin'
// console.log(my[sy])

// class Jquery{
//     constructor(selector){
//         this.selector=selector;
//     }
//     html(){
//         const element = document.querySelector(this.selector);
//         return element;
//     }

// }

// const $ = new Jquery('div');

// console.log($.html())

// window.a = $
// console.log(window)
// console.log(a.html())

// document.querySelector('button').addEventListener('click',buttonHandle);

// function buttonHandle(){
//     if(window.localStorage.getItem('value')){
//         return 'right'
//     }else{
//         console.log('r')
//         setInterval(() => {

//             window.location.reload()
//         }, 1000);
//     }
// }

// ip traker of a user
//  https://api.ipify.org/?format=json

// let myData

//  const data = fetch("https://api.ipify.org/?format=json").then(res=>{
//    return res.json()
//  }).then(data =>{console.log(data.ip); return myData=data.ip})

//  .catch(err=>{err})

//  console.log(myData)

// const data = ()=>{
//   return ()=>{
//     console.log('m')
//       return 'morsalin'

//   }
// }

// console.log(data())

// function main(main){
//       return main
// }

// console.log(main())

// const data = (data)=>{
//   return 'morsalin'+data
// }

// console.log(main(data(' morsalin')))

// calculating factorial in javascript

// function factorial(n) {
//   if (n == 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(6));

// function fac(n) {
//   if (n == 0) {
//     return 1;
//   }
//   return n - fac(n - 1);
// }

// console.log(fac(59));

// function main(m) {
//   if (m !== 110) {
//     return '9M';
//   }
//   return main(m-1);
// }
// console.log(main(47));


// // Leap year

// // The next algorithm is to check whether a given year is a leap year or not.


// // is leap year - JavaScript
// function checkLeapYear(year) {
//   if ( ((year % 4 == 0) 
//         && 
//         (year % 100 != 0)) || (year % 400 == 0) ) {
//       console.log(year + ' is leap');
       
//       return true;
//   } else {
//       console.log(year + ' is NOT leap');
       
//       return false;
//   }
// }

// console.log(checkLeapYear(2012));
// console.log(checkLeapYear(2013));



// const a = false;
// const b=true;
// const c=false;

// const d = a && b || c;
// console.log(d)

// const kk = false || true;
// console.log(kk)


// const k = false;
// const i = true;
// const m = false;
// const v = k||i || m
// const fm = false || m;

// const h =  false && false && true && true|| false && false || true;


// console.log(h)



// let p = false || true;
// console.log(p)


// console.log(fm)
// console.log(v)


// var _list = "abcdefghijklmnopqrstuvwxyz9876543210"; 
 
// function randomStringGenerator(how_long) {
//     var tmp = '', i = 0;
//     var list_len = _list.length;
     
//     for (i = 0; i < how_long; i++) {
//         tmp += _list.charAt(Math.floor(Math.random() * list_len));
//     }
   
//     return tmp;
// }
 
// console.log(randomStringGenerator(878));



// const randomText = 'kdfjiejkmc lkajrleidkfjdlkfjdsjfkdsjfr';

// function GetText(how_long){
//     var temp = '' , i = 0 ;
//     var list_list = randomText.length;
//     for(i = 0;i<how_long;i++){
//       temp+=randomText.charAt(Math.floor(Math.random()* list_list));
//     }
//     return temp;
// }

// console.log(GetText(49))


