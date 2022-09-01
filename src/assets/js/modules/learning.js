// /* eslint-disable */
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (const key in salaries) {
//   sum += salaries[key];
// }

// alert(sum); // 390
// /* eslint-enable */

/* eslint-disable */

// function firstTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50, '10'];
//     const result = [];
//     arr.map(Number).map(el => result.push(el));

//     return result;
// }

// console.log(firstTask());

function squareSum(numbers){
    const sum = [];
    numbers.map((num => sum.push(Math.pow(num,2))))
    let s = 0;
    for (i = 0; i < sum.length; i++){
       s += sum[i];
    }
    return s;
}

// console.log(squareSum([5,10]));

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

// console.log(factorial(3));

const testFetch = document.querySelector('.test-fetch');

async function fetchMovies() {
    const array = [];
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    // waits until the request completes...
    const data = await response.json(); // читаем ответ в формате JSON
    // console.log(array);
    data.map(item => array.push(item));
    return array;
}

const test = fetchMovies();
console.log(test);
// test.map(item => testFetch.innerHTML += "<p>" + item.id + "</p>")
// function test() {
//     const array = fetchMovies();
//     array.map(item => testFetch.innerHTML += "<p>" + item.id + "</p>")
// }

// test();

// console.log(commits);

/* eslint-enable */
