# Essential Javascript For React

## Object and Array Destructuring in JavaScript 🚀

Destructuring is a powerful feature in JavaScript that allows you to extract values from arrays and objects and assign them to variables in a more concise and readable way. They make working with complex data structures more straightforward.

## Object Destructuring

Object destructuring is used to extract values from objects by matching the variable names with the object's property names.

### Syntax:
```javascript
const { property1, property2, ...rest } = myObject;
```

## [Rest and Spread Operator](./restSpread.js)

The spread operator and the rest parameter are two powerful tools in JavaScript that can be used to manipulate arrays and objects in a variety of ways.

**Spread Operator**

The spread operator is represented by three dots (`...`) and can be used to:

* **Copy an array:** To copy an array, you can simply use the spread operator to spread the elements of the original array into a new array. For example, the following code will copy the `fruits` array into a new array called `copyOfFruits`:

```javascript
const fruits = ["apple", "banana", "cherry"];
const copyOfFruits = [...fruits];
console.log(copyOfFruits); // Output: ["apple", "banana", "cherry"]
```

* **Combine arrays:** To combine two or more arrays, you can use the spread operator to spread the elements of each array into a new array. For example, the following code will combine the `fruits` and `veggies` arrays into a new array called `combined`:

```javascript
const fruits = ["apple", "banana", "cherry"];
const veggies = ["carrot", "broccoli", "spinach"];
const combined = [...fruits, ...veggies];
console.log(combined); // Output: ["apple", "banana", "cherry", "carrot", "broccoli", "spinach"]
```

* **Spread function arguments:** To spread the elements of an array into function arguments, you can use the spread operator. For example, the following code will call the `add()` function with the elements of the `numbers` array:

```javascript
function add(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
const result = add(...numbers);
console.log(result); // Output: 6
```

**Rest Parameter**

The rest parameter is also represented by three dots (`...`) and can be used to collect the remaining arguments passed to a function into an array. For example, the following code will collect the remaining arguments passed to the `sum()` function into an array called `numbers`:

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
const result1 = sum(1, 2, 3, 4, 5);
console.log(result); // Output: 15
```

The rest parameter can also be used to combine regular parameters with rest parameters. For example, the following code will combine the `separator` parameter with the remaining `strings` parameters into an array and then join the elements of the array with the `separator` parameter:

```javascript
function concat(separator, ...strings) {
  return strings.join(separator);
}
const result2 = concat("-", "apple", "banana", "cherry");
console.log(result); // Output: "apple-banana-cherry"
```