# Lifting state up

"***Lifting state up***" in React is a common design pattern that involves moving the state of a component higher up in the component tree to share it with one or more child components. This pattern is used when you want to make the state of a component accessible to its parent or other sibling components.


##🚀 What is Lifting State Up in React?

"Lifting state up" is a React design pattern where you move the management of a component's state to a common ancestor (higher in the component hierarchy).
This allows multiple child components to access and update the same state data, promoting data sharing and synchronization.

##⚡ When Do You Need It?

- **Shared State**: Use lifting state up when two or more components need access to the same piece of data or state. By lifting it to a common ancestor, you avoid prop-drilling (passing props through many intermediate components).
  Maintain Consistency: It ensures that changes to the shared state in one component are reflected in all components that use that state. This is crucial for maintaining data consistency across your application.
- **Form Handling**: It's commonly used for handling forms. The form data is lifted to a parent component, and child components (form inputs) receive values and callbacks to update that data.
  Example:

```jsx
Copy code
import React, { useState } from 'react';

function ParentComponent() {
  const [sharedState, setSharedState] = useState('');

  const handleChange = (newValue) => {
    setSharedState(newValue);
  };

  return (
    <div>
      <ChildComponent value={sharedState} onChange={handleChange} />
      <AnotherChildComponent value={sharedState} />
    </div>
  );
}

function ChildComponent({ value, onChange }) {
  return (
    <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
  );
}

function AnotherChildComponent({ value }) {
  return <p>Value: {value}</p>;
}
```

In this example, the state (sharedState) is lifted from ParentComponent to be shared between ChildComponent and AnotherChildComponent, allowing them to synchronize their views based on the same data.

Lifting state up is a powerful pattern for managing and sharing state in React applications, promoting reusability and maintainability.
