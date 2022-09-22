async function input() {
    const data = new Object();
    data.nama = document.getElementById("nama").value;
    data.kelas = document.getElementById("kelas").value;
    data.alamat = document.getElementById("alamat").value;
    data.nohp = document.getElementById("nohp").value;
    data.email = document.getElementById("email").value;

  //   console.log(data);
  // const data_user =  showInput(data);
  // return data_user;
}
  
async function showInput(data){
   await alert(data.nama);
    // var b = document.getElementById('demo');
}

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: "resolved"
//   }
  
//   asyncCall();
  

//   async function foo() {
//     const result1 = await new Promise((resolve) =>
//       setTimeout(() => resolve("1"))
//     );
//     const result2 = await new Promise((resolve) =>
//       setTimeout(() => resolve("2"))
//     );
//   }
//   foo();

//   async function foo() {
//     const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
//     const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 500));
//     const results = [await p1, await p2]; // Do not do this! Use Promise.all or Promise.allSettled instead.
//     console.log(results); 
// }
//   foo().catch(() => {});


// //contoh proses berupa tahapan kecepatan 
// function resolveAfter2Seconds() {
//     console.log("starting slow promise");
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("slow");
//         console.log("slow promise is done");
//       }, 2000);
//     });
//   }
  
//   function resolveAfter1Second() {
//     console.log("starting fast promise");
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("fast");
//         console.log("fast promise is done");
//       }, 1000);
//     });
//   }
  
//   async function sequentialStart() {
//     console.log("==SEQUENTIAL START==");
  
//     // 1. Execution gets here almost instantly
//     const slow = await resolveAfter2Seconds();
//     console.log(slow); // 2. this runs 2 seconds after 1.
  
//     const fast = await resolveAfter1Second();
//     console.log(fast); // 3. this runs 3 seconds after 1.
//   }
  
//   async function concurrentStart() {
//     console.log("==CONCURRENT START with await==");
//     const slow = resolveAfter2Seconds(); // starts timer immediately
//     const fast = resolveAfter1Second(); // starts timer immediately
  
//     // 1. Execution gets here almost instantly
//     console.log(await slow); // 2. this runs 2 seconds after 1.
//     console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
//   }
  
//   function concurrentPromise() {
//     console.log("==CONCURRENT START with Promise.all==");
//     return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
//       (messages) => {
//         console.log(messages[0]); // slow
//         console.log(messages[1]); // fast
//       }
//     );
//   }
  
//   async function parallel() {
//     console.log("==PARALLEL with await Promise.all==");
  
//     // Start 2 "jobs" in parallel and wait for both of them to complete
//     await Promise.all([
//       (async () => console.log(await resolveAfter2Seconds()))(),
//       (async () => console.log(await resolveAfter1Second()))(),
//     ]);
//   }
  
//   sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"
  
//   // wait above to finish
//   setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"
  
//   // wait again
//   setTimeout(concurrentPromise, 7000); // same as concurrentStart
  
//   // wait again
//   setTimeout(parallel, 10000); // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"