# Thinking in React

## State Management 🧠

**When to Use State:**

- State should be used to manage data that can change over time and needs to be reflected in your UI. 🔄
- Examples include user input, data fetched from APIs, and any dynamic content that needs to be updated. 🌐

## Types of State: Local vs. Global:

- **Local State**: Local state is limited to a specific component and is used for managing component-specific data. It's created and managed within the component itself using the useState hook or by extending the React.Component class. 🏡
- **Global State**: Global state, on the other hand, is accessible by multiple components and is used for data that needs to be shared across different parts of your application. You can implement global state management using context API, Redux, or other state management libraries. 🌍

## Where to Place Each Piece of State:

- Determine whether the state is specific to a single component or if it needs to be shared across components. 📍
- For local state, place it within the component that needs to control and update that specific data. 🏢
- For global state, use a centralized state management solution like Redux or context API to share the state across multiple components. 🌐

## Establishing Data Flow 🌊

- **One-Way Data Flow**:
  React follows a unidirectional data flow, meaning data flows from parent components to child components. Changes in the child components trigger callbacks or events that update the parent's state, which then gets passed down to its children. ⬅️ ➡️
- **Child to Parent Communication**:
  To communicate from child to parent, you can pass callback functions as props from the parent to the child. The child can then call these functions to update the parent's state. 🧒 ↔️ 🧔
- **Accessing Global State**:
  Components that need access to global state can do so through context providers (if using context API) or by connecting to the global state store (if using Redux). This allows components to access and update global state as needed. 🌐
