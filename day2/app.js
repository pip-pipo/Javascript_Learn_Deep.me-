// const fs = require('fs');
// const path = require('path');

// const dir = path.dirname(__dirname);
// // let mkaeFile = fs.writeFileSync(dir+'index.html',"morsalin")

// fs.open('index.html', 'r', (err, fd) => {
//     if (err) throw err;
//     fs.close(fd, (err) => {
//       if (err) throw err;
//     });
//   });

//  fs.readFileSync(dir+'index.html')

const fun = (n) => {
  return (n * n) / 2 - (1 + n);
};
console.log(fun(101));
const data = fun(30).toString().slice(0,2)
const intData = Number(data) * 1.0 / 1.01;


console.log(intData)



function random(){
    let int = 0;
    int++;
    return int+=033/44*454/45/(3*4.000)
}

console.log(random())
console.log(Math.random())