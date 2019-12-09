const db = require('../index.js');
const faker = require('faker');

function streamFunc(max, writer, callback, headerline) {
    let x = max;
    write();
  
    function write() {
      let ok = true;
      do {
        // if (x % 100 === 0) {
        //     console.log(x + ' entries to go')
        // }
        if (x === max) {
          x--;
          writer.write(
            headerline
          );
        } else {
            x--
        }
        if (x === 0) {
          // last time!
          var str = callback(max - x)
          writer.write(str);
        } else {
          // See if we should continue, or wait.
          // Don't pass the callback, because we're not done yet.
          var str = callback(max - x) + "\n";
          ok = writer.write(str);
        }
      } while (x > 0 && ok);
      if (x > 0) {
        // had to stop early!
        // write some more once it drains
        writer.once("drain", write);
      }
    }
}


// db.end();