    // Spread Operator
    // 1. Copying an array
    const fruits = ["apple", "banana", "cherry"];
    const copyOfFruits = [...fruits];
    console.log(copyOfFruits); // Output: ["apple", "banana", "cherry"]

    // 2. Combining an array
    const veggies = ["carrot", "broccoli", "spinach"];
    const combined = [...fruits, ...veggies];
    console.log(combined); // Output: ["apple", "banana", "cherry", "carrot", "broccoli", "spinach"]

    // 3. Spreading function arguments

    function add(a, b, c) {
    return a + b + c;
    }
    const numbers = [1, 2, 3];
    const result = add(...numbers);
    console.log(result); // Output: 6

    //Rest Operator

    // 1: Collecting Remaining Array Elements
    const [first, second, ...rest] = [1, 2, 3, 4, 5];
    console.log(first); // Output: 1
    console.log(second); // Output: 2
    console.log(rest); // Output: [3, 4, 5]

    // 2: Function with Rest Parameters
    function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
    }
    const result1 = sum(1, 2, 3, 4, 5);
    console.log(result); // Output: 15

    // 3: Combining Rest and Regular Parameters
    function concat(separator, ...strings) {
    return strings.join(separator);
    }

    const result2 = concat("-", "apple", "banana", "cherry");

    console.log(result); // Output: "apple-banana-cherry"
