
// // 2. Set up the next function in the Promise with four then() instances,
// //     which should output a value into the counter function, and return a
// //     value which will provide input for the subsequent then() instance.
// //     The returned values should be one , then two , then three . The
// //     screen output in the console should be the following:

//  let pro= new Promise((resolved)=>{
//      resolved('Resolved')
//  })
//  .then((value=>{
//      console.log('Start Counting');
//  })) .then((value=>{
//      console.log('One');
//  }))
// .then((value=>{
//      console.log('Two');
//  }))
//  .then((value=>{
//      console.log('Three');
//  }))
//  .catch((data=>{
//      console.log(data);
//  }))
 // Output    
 // Start Counting
 // One
 // Two
 // Three

let pro= new Promise((resolved)=>{
    resolved('Resolved')
})
.then((value=>{
    console.log('start counting');
}))
.then((value=>{
    console.log('one');
}))
.then((value=>{
    console.log('two');
}))
.then(( value=>{
    console.log('three');
}))
.then((value=>{
    console.log('four');
}))
.catch((data=>{
     console.log(data);
 }))