module.exports = function multiply(first, second) {
   if (first - second < 0) {
    let arr = second;
    second = first;
    first = arr;
  }

  let arr = []
  first.split('').map(v => arr.unshift(v))
  arr.push('0')
  first = arr.join('')

  arr = []
  second.split('').map(v => arr.unshift(v))
  second = arr.join('')

  arr = 0;
  let lines = [];
  for (let i of second) {
    let line = [];
    for (let j of first) {
      let mul = i * j + arr;
      arr = mul >= 10 ? Math.floor(mul / 10) : 0;
      line.push(arr ? mul - arr * 10 : mul)
    }
    lines.push(line);
  }

  arr = 0;
  for (let i = 0; i < lines.length - 1; i++) {
    for (let j = 0; j < lines.length - 1 - arr; j++) lines[i].push(0);
    arr += 1
  }

  arr = 0;
  for (let i = 0; i < lines.length - 1; i++) {
    for (let j = 0; j < arr; j++) lines[i].unshift(0);
    arr += 1
  }

  while (lines[lines.length - 1].length != lines[0].length) lines[lines.length - 1].unshift(0);

  arr = 0;
  let answer = [];
  let sum = 0;
  for (let i = 0; i < lines[0].length; i += 1) {
    lines.map(v => sum += v[i]);
    sum += arr;
    arr = sum >= 10 ? Math.floor(sum / 10) : 0;
    answer.unshift(arr ? sum - arr * 10 : sum)
    sum = 0;
  }

  answer = answer.join('');
  return answer[0] === '0' ? answer.substr(1, answer.length) : answer;
}
