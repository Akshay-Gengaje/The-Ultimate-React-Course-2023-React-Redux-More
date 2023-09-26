# What is state ?

The state is a built-in React object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes, the component re-renders. The change in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render.

# State vs Props

In React, both state and props are used to manage and pass data within a component and between components, but they have different purposes and characteristics. Here's a tabular comparison of state and props in React:

| Feature               | State                                                                                             | Props                                                                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ownership**         | Belongs to the component where it is declared.                                                    | Passed to a component from its parent component.                                                                                                        |
| **Mutability**        | Can be changed using `setState()` method, making it mutable.                                      | Immutable and cannot be modified within the component.                                                                                                  |
| **Initialization**    | Typically initialized in the component's constructor using `this.state`.                          | Passed down from a parent component when the child component is created.                                                                                |
| **Source of Truth**   | Represents the internal data and state of a component.                                            | Represents data that is received from a parent component or external source.                                                                            |
| **Scope**             | Local to the component where it is defined.                                                       | Can be accessed by child components through their props.                                                                                                |
| **Purpose**           | Used to store and manage dynamic data that can change over time and trigger component re-renders. | Used to pass data from parent components to child components, allowing communication between them.                                                      |
| **Update Triggers**   | Changes to state trigger a component re-render.                                                   | Changes to props do not trigger a re-render in the child component. However, they can be used to conditionally render content or update internal state. |
| **Typical Usage**     | For managing component-specific data and user interactions within a component.                    | For passing data, configuration, and callbacks to child components.                                                                                     |
| **Examples**          | `js this.state = { count: 0 };`                                                                   | `js <ChildComponent data={someData} />`                                                                                                                 |
| **Access**            | Accessed using `this.state.someValue`.                                                            | Accessed using `this.props.someValue`.                                                                                                                  |
| **Update Mechanism**  | Use `this.setState()` to update state and trigger re-renders.                                     | Parent component passes updated props to child components.                                                                                              |
| **Lifecycle Methods** | Often used with `componentDidMount`, `componentDidUpdate`, etc., to handle state changes.         | Often used with `componentWillReceiveProps`, `render`, etc., to work with props.                                                                        |

# Local state vs Global state

| Aspect             | Local State                                                                | Global State                                                      |
| ------------------ | -------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Scope**          | Limited to a specific component                                            | Accessible across multiple components                             |
| **Use Case**       | Component-specific data and UI-related state                               | Data shared between different parts of the application            |
| **Implementation** | `useState` hook (functional components) or `this.state` (class components) | Context API, Redux, Mobx, or other state management libraries     |
| **Accessibility**  | Restricted to the defining component                                       | Accessible and modifiable by components subscribing to it         |
| **Performance**    | Re-renders only within the component                                       | Updates may trigger re-renders in multiple components             |
| **Testing**        | Relatively straightforward for testing                                     | Can be more complex due to potential data interactions            |
| **Scalability**    | Suitable for smaller components                                            | Essential for larger applications with complex data-sharing needs |

## Summary

Understanding state management is crucial in React development, and it involves deciding when to create new pieces of state, what type of state to use (local or global), where to place each piece of state in your codebase, and how data should flow through your app.

## Highlights

🏠 State management in React is like giving each piece of state a home in your codebase.
🌐 React has two types of state: local state, specific to one or a few components, and global state, accessible to all components in the app.
🧩 It's recommended to start with local state and only use global state when necessary.
🤔 To determine when to create state, consider if the data will change, if it can be derived from existing state or props, and whether updating the state should trigger a component re-render.
🔄 Use the useState Hook to create new state variables in React components.
🔗 Pass state down to child components using props when needed.
⬆️ When state is required by multiple components or a parent component, lift the state up to the first common parent component.
🌍 For state needed across the entire application, consider using global state management libraries like Redux or React's Context API.
