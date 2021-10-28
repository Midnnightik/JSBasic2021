//Циклы 1
let arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

//Циклы 2
for (var i = 2; i <= 100; i++) {
	if (i % 2 == 0) console.log(i);
}

//Циклы 3.1
let array = Array.from(Array(101).keys());
var result = 0;
for (var i = 0; i < array.length; i++) {
	result = result + array[i];
}
console.log(result);

//Циклы 3.2
const employees = [
   {
       name: 'Sam',
       salary: 100
   }, {
       name: 'John',
       salary: 300
   }, {
       name: 'Pier',
       salary: 400
   }, {
       name: 'David',
       salary: 2020
   }, {
       name: 'Jonathan',
       salary: 400
   }, {
       name: 'Deny',
       salary: 2200
   }, {
       name: 'Ken',
       salary: 500
   }, {
       name: 'Samantha',
       salary: 100
   }, {
       name: 'Mag',
       salary: 270
   },
 
]
for (var i = 0; i < employees.length; i++) {
	console.log('Employee name: ' +employees[i].name);
	console.log('Employee salary: ' +employees[i].salary);
}

//Циклы 4
let array = Array.from(Array(101).keys());
var result = 0;
for (var i = 0; i < array.length; i++) {
	if (i > 0) result = result + i;
}
console.log(result);

//Циклы 5
let array = Array.from(Array(101).keys());
var str = '';
for (var i = 0; i < array.length; i++) {
	if (i > 0) {
		str+='-'+i;
	}
}
console.log(str);

//Функции 1
function getQube(number) {
	return number*number*number;
}
console.log(getQube(10));

//Функции 2
function isNumberInRange(number) {
	if (number > 0 && number < 10) return true;
	return false;
}
console.log(isNumberInRange(3));
console.log(isNumberInRange(-3));
console.log(isNumberInRange(10));
console.log(isNumberInRange(11));
console.log(isNumberInRange(0));

//Функции 3
function getSquare(number) {
	return number*number;
}
console.log(getSquare(10));

//Функции 4
function customFunction(param1, param2, param3) {
	return (param1 - param2) / param3;
}
console.log(customFunction(16, 2, 2));

//Функции 5
function isEven(number) {
	if (number % 2 == 0) return true;
	return false;
}
console.log(isEven(2));
console.log(isEven(3));

//Функции 6
function getDayName(num) {
	switch(num) {
		case 1:
			return 'Понедельник';
		case 2:
			return 'Вторник';
		case 3:
			return 'Среда';
		case 4:
			return 'Четверг';
		case 5:
			return 'Пятница';
		case 6:
			return 'Суббота';
		case 7:
			return 'Воскресенье';
	}
}
console.log(getDayName(2));
console.log(getDayName(5));
console.log(getDayName(6));

//Функции 7
var str = '123456';
function getAnotherPos(str) {
	let anotherStr = '';
	let iterations = str.length / 2;
	if (str.length % 2 != 0) iterations += 1;
	for (var i = 1; i <= iterations; i++) {
		if (2*i < str.length) anotherStr += str[2 * i - 1];
		anotherStr += str[2 * i - 2];
	}
	return anotherStr;
}
console.log(getAnotherPos(str));
