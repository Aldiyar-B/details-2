// function work(a, b) {
//     console.log( a + b ); // произвольная функция или метод
//   }
  
// const spy = (func) => {
//     const wrapper =  (...args) => {
//         wrapper.calls.push(args)
//         return func.apply(this,args)
//     }
//     wrapper.calls = []
//     return wrapper;
// }
//   work = spy(work);
  
//   work(1, 2); // 3
//   work(4, 5); // 9
//   work(7, 8); // 9
//   work(11, 12); // 9
  
// for(args of work.calls) {
//     console.log(`call ${args.join()}`)
// }

function work(a, b) {
    console.log( a + b ); // произвольная функция или метод
  }