# Derived State in React

Derived state in React refers to the practice of computing the value of one piece of state based on the value(s) of other state variables or props. It allows you to calculate or derive a state value from existing data rather than storing it separately. Derived state is often used to keep the component's state in sync with some computation or transformation of other state or prop values.

## Key Points

- **Calculation from Existing Data:** Derived state is used when you need to compute or derive a value from other pieces of data in your component. This derived value is not stored as a separate state variable but is computed on the fly when needed.

- **Use Cases:** Derived state is useful when you want to perform calculations, transformations, or aggregations on the existing state or prop values. Common use cases include formatting data, filtering data, calculating totals, and more.

- **Performance Considerations:** While derived state can be helpful for organizing your logic and keeping your component's state in sync, it's important to consider performance implications. Calculating derived state in a render method might lead to unnecessary recalculations and re-renders. You can use memoization techniques to optimize performance when necessary.

## Example

```jsx
import React, { useState, useEffect } from "react";

function PriceCalculator({ price, discount }) {
  // Derived state for the discounted price
  const discountedPrice = price - (price * discount) / 100;

  return (
    <div>
      <p>Original Price: ${price}</p>
      <p>Discount: {discount}%</p>
      <p>Discounted Price: ${discountedPrice}</p>
    </div>
  );
}

function App() {
  const [price, setPrice] = useState(100);
  const [discount, setDiscount] = useState(10);

  useEffect(() => {
    // Simulate changing price and discount over time
    const intervalId = setInterval(() => {
      setPrice((prevPrice) => prevPrice + 10);
      setDiscount((prevDiscount) => prevDiscount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <PriceCalculator price={price} discount={discount} />;
}

export default App;
```

In this example, the discountedPrice is derived from the price and discount props without storing it as a separate state variable.

Derived state can help simplify your component's logic and keep your code more maintainable by avoiding unnecessary state variables. However, it should be used thoughtfully to balance readability and performance considerations.
