# Lifting state up

"**_Lifting state up_**" in React is a common design pattern that involves moving the state of a component higher up in the component tree to share it with one or more child components. This pattern is used when you want to make the state of a component accessible to its parent or other sibling components.

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

# Sharing State with Siblings

Sharing state between sibling components in React can be achieved by lifting the state up to a common ancestor component (usually their parent) and passing the shared state and any necessary callback functions as props to the sibling components. This pattern allows sibling components to communicate and synchronize their state through a shared parent.

Here's an example of sharing state between sibling components:

```jsx
import React, { useState } from "react";

function ParentComponent() {
  // Define and manage the shared state in the parent component.
  const [sharedState, setSharedState] = useState("");

  // Callback function to update the shared state.
  const updateSharedState = (newValue) => {
    setSharedState(newValue);
  };

  return (
    <div>
      <SiblingComponentA
        sharedState={sharedState}
        updateSharedState={updateSharedState}
      />
      <SiblingComponentB sharedState={sharedState} />
    </div>
  );
}

function SiblingComponentA({ sharedState, updateSharedState }) {
  return (
    <div>
      <h2>Component A</h2>
      <input
        type="text"
        value={sharedState}
        onChange={(e) => updateSharedState(e.target.value)}
      />
    </div>
  );
}

function SiblingComponentB({ sharedState }) {
  return (
    <div>
      <h2>Component B</h2>
      <p>Shared State in Component B: {sharedState}</p>
    </div>
  );
}

export default ParentComponent;
```

In this example:

- **ParentComponent** manages the shared state (**sharedState**) using the `useState` hook and provides a callback function (**updateSharedState**) to update the state.

- **SiblingComponentA** and **SiblingComponentB** are sibling components that need to share the **sharedState**.

- **SiblingComponentA** receives the **sharedState** and the **updateSharedState** callback as props, allowing it to both display and update the shared state.

- **SiblingComponentB** receives only the **sharedState** as a prop, enabling it to display the shared state but not directly modify it.

By lifting the state to the common ancestor (**ParentComponent**) and passing it down to the sibling components, you enable communication and synchronization between the sibling components, ensuring that they share the same state data. This approach promotes a clean and predictable way of managing shared state between sibling components in React.
