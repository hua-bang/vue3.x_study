require('./print');
require('./style/style.css');
require('./test');

console.log(1);
console.log(123);

// only print.js has changed, cause hot update
// if (module.hot) {
//   module.hot.accept('./print.js', () => {
//     console.log('print.js update');
//   });
// }
