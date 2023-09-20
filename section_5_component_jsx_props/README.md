# Working with components, jsx and props

In this section we will learn React fundamentals, including components, props, and JSX, while building a developer profile card in this comprehensive Udemy course.

- **_Highlights_**
  - 📚 Explore core concepts of React app development.
  - 🔄 Understand components as the building blocks of React apps.
  - ✨ Create and reuse components with JSX.
  - 🔄 Share data between components using props.
  - 📝 Learn about rendering lists and conditional rendering.
  - 🚀 Practice React by building a developer profile card project.
  - 🎯 Start your React journey now with this course.

# Components in React

Components are the building blocks of React applications. They are reusable pieces of code that can be combined to create complex user interfaces. Components can be nested inside other components, and they can be passed data through props and state.

Here are some of the benefits of using components in React:

**_Reusability_**: Components can be reused throughout your application, which saves you time and effort.
Maintainability: Components make your code more maintainable and easier to understand.
Composability: Components can be nested inside other components to create complex user interfaces.
Encapsulation: Components encapsulate functionality and data, which makes your code more modular and reusable.
There are two main types of components in React:

**_Class components_**: Class components are defined using the class keyword and extend the React.Component class. Class components can have state and lifecycle methods.

**_Functional components_**: Functional components are defined using a JavaScript function. Functional components are stateless, but they can use React hooks to manage state and side effects.

Here is an example of a simple functional component:

Example of a functional component :

```JavaScript
function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
```

This component accepts two props: onClick and label. The onClick prop is a function that is called when the button is clicked. The label prop is the text that is displayed on the button.

Example of how to use the **Button** component

```JavaScript
function MyComponent() {
  const handleClick = () => {
    // Do something when the button is clicked.
  };

  return (
    <div>
      <Button onClick={handleClick} label="Click me!" />
    </div>
  );
}
```

This component renders a Button component with the onClick prop set to the handleClick function and the label prop set to "Click me!".

# JSX

💡 JSX is extension of JavaScript.

📝 **Declarative** syntax to **describe** what components look like and **how they work**.

⚙️ Components must **return** a block of JSX

🧩 Extension of JavaScript that allows us to **embed JavaScript, CSS, and React components into HTML**.

🔄 Each JSX element is **converted** to a _React.createElement function call_

✅ We could use React **without JSX**

- 💡 JSX works similarly to HTML but allows JavaScript expressions within curly braces.
- 💡 JSX is just like any other JavaScript expression, making it versatile within components.
- 💡 Each piece of JSX can have only one root element; React Fragments are used for multiple elements.
- 💡 Differences between JSX and HTML can be explored through coding.

#### General JSX Rules
- 🧮 JSX syntax is similar to HTML.
- 🧮 Curly braces {} allow insertion of JavaScript expressions.
- 🧮 JavaScript expressions can include variables, arrays, objects, and operators.
- 🧮 Statements like if/else and loops are not allowed in JSX.

#### JSX vs. HTML Differences
- 🔄 JSX and HTML differences are best learned through coding examples.
- 🔄 A reference list of differences is available for download as a reference.
- 🔄 Practical exploration of these differences will be done through coding activities.

# Props in React

- 💡 **Props in React**: Props are used in React to pass data from parent components to child components, allowing communication between them. They are essential for configuring and customizing components.
- 💡 **Types of Data**: React uses two types of data for rendering components: props and state. State is internal and can be updated by the component, while props come from the parent component and are immutable.
- 💡 **Immutability of Props**: React enforces the immutability of props to maintain purity and avoid side effects that could affect the parent component.
- 💡 **One-Way Data Flow**: React follows a one-way data flow, where data is passed from parent to child components via props, making applications more predictable, debuggable, and efficient.
- 💡 **Benefits of One-Way Data Flow**: One-way data flow simplifies development, debugging, and performance optimization in React applications.
- 💡 **Passing Data to Parent Components**: While data usually flows from parent to child components, there are clever techniques to pass data from child to parent components, which will be covered later in the course.
- 💡 **Understanding these concepts is crucial for mastering React**.

#### Highlights

- Props are used for passing data from parent to child components in React.
- React distinguishes between props (immutable) and state (mutable) for component data.
- Enforcing immutability of props ensures pure functions in React.
- One-way data flow in React simplifies development and enhances predictability.
- Passing data from child to parent components will be discussed in a later section.
- Understanding these concepts is crucial for mastering React.
