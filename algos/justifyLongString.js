// justify a long string into smaller strings of equal length, separated by newlines
// equal lengths are created by injecting spaces in between words
// two arguments: a long string and a number representing length of each substring
// EXAMPLE:
  // let sampleText = 'Hello world, my name is David Lee, and this is a test run!';
  // let sampleLength = 15;
  // justify(sampleText, sampleLength)
    // should return:
      // Hello world, my
      // name  is  David
      // Lee,  and  this
      // is  a test run!

const justify = (string, number) => {
  let splitStr = string.split(' ');
  let resultStore = [];
  let result = '';
  let lineStore = [];
  let count = 0;

  for(let i = 0; i < splitStr.length; i++) {
    if(count + splitStr[i].length <= number) {
      // incrementing count by 1 for the space
      count += splitStr[i].length + 1;
      lineStore.push(splitStr[i]);
    } else {
      resultStore.push(lineStore);
      count = 0;
      lineStore = [];
      lineStore.push(splitStr[i]);
      count += splitStr[i].length +1;
    }
  }

  //push last words in
  if(lineStore.length) {
    resultStore.push(lineStore);
  }

  // iterate through resultStore
  result = resultStore.map((el, i) => {
    let temp = el.join(' ');
    let spaces = ' ';
    while(temp.length !== number) {
      if(temp.length < number) {
        temp = temp.split(spaces);
        spaces += ' ';
        temp = temp.join(spaces);
      } else {
        let lastIndex = temp.lastIndexOf(spaces);
        temp = temp.substring(0, lastIndex) + temp.substr(lastIndex + 1)
      }
    }
    return temp;
  }).join('\n');

  console.log(result);
  return result;
}


let sampleText = 'Hello world, my name is David Lee, and this is a test run!';
let sampleLength = 15;
justify(sampleText, sampleLength);