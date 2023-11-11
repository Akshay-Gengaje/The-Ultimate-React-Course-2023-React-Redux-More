# Memoization

Memoization is an optimization technique used in computing to speed up the execution of functions by caching their results. The basic idea behind memoization is to store the results of expensive function calls and return the cached result when the same inputs occur again. This can be particularly useful in situations where the same computation is repeated with the same inputs, saving time and resources by avoiding redundant calculations.

![Alt text](./images/memoization.png)

In the context of React, memoization is commonly used to optimize the rendering performance of functional components. React provides a `React.memo` higher-order component (HOC) or the `useMemo` hook to achieve memoization.

### [React.memo](./Memo%20function.md)

`React.memo` is a higher-order component that memoizes a functional component, preventing unnecessary re-renders when the component's props remain the same. Here's a simple example:

```jsx
import React from "react";

const MyComponent = React.memo(({ data }) => {
  console.log("Rendering MyComponent");
  return <div>{data}</div>;
});
```

In this example, `MyComponent` will only re-render if the `data` prop changes. If the props remain the same between renders, the previously rendered result will be reused, improving performance.

### [useMemo Hook](./useMemo.md)

The `useMemo` hook is another way to apply memoization in functional components. It memoizes the result of a function and reuses the cached result until the dependencies (specified as an array) change. Here's an example:

```jsx
import React, { useMemo } from "react";

const MyComponent = ({ data }) => {
  const memoizedResult = useMemo(() => {
    console.log("Calculating memoized result");
    // Perform expensive calculations based on props
    return data + " (processed)";
  }, [data]); // Dependency array - recompute when 'data' changes

  console.log("Rendering MyComponent");
  return <div>{memoizedResult}</div>;
};
```

In this example, the function inside `useMemo` is only re-executed when the `data` prop changes. The calculated result is memoized and reused if the dependencies remain the same.

### Benefits of Memoization in React

1. **Performance Optimization:**

   - Memoization reduces unnecessary re-renders and computations, improving the overall performance of a React application.

2. **Avoiding Redundant Calculations:**

   - Expensive calculations or function calls can be cached, preventing redundant executions when the same inputs are encountered.

3. **Efficient Rendering:**
   - Components memoized using `React.memo` or `useMemo` can selectively update only when necessary, leading to a more responsive user interface.

Memoization is a powerful tool for optimizing performance in React applications, especially when dealing with components that have expensive computations or render logic. It's important to use memoization judiciously based on the specific requirements and characteristics of the application.
