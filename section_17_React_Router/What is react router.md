# What is react router ?

React Router is a popular library for routing and navigation in React applications. It allows you to build single-page applications (SPAs) with multiple views and components that can be navigated to and from without the need for a full page reload. React Router is commonly used for creating the navigation structure and handling the routing logic within React applications.

Key features and concepts of React Router include:

1. **Route Matching**: React Router allows you to define routes that match specific URLs and render corresponding components. Routes can be exact matches or include dynamic parameters.

2. **Nested Routes**: You can nest routes within one another, creating complex navigation structures where components render within each other based on the URL.

3. **Programmatic Navigation**: React Router provides APIs for programmatically navigating between different routes. This is useful for handling navigation in response to user actions or application logic.

4. **Route Parameters**: You can define route parameters, which are placeholders in the URL that can capture dynamic values, such as IDs or slugs, and pass them as props to the rendered components.

5. **Route Guards**: React Router allows you to implement route guards or middleware that can control access to specific routes based on user authentication, permissions, or other criteria.

6. **History Management**: React Router abstracts the browser's history API and allows you to control navigation history, including features like browser back and forward buttons.

7. **Link Component**: React Router provides a `<Link>` component that helps create navigation links within your application. It ensures that when users click on links, the application updates the view without a full page reload.

8. **Switch Component**: The `<Switch>` component is used to render the first matching `<Route>` within a group of routes. This is helpful for ensuring that only one route is rendered at a time.

React Router comes in multiple versions, including React Router (for web applications), React Native Router (for mobile applications), and React Router Native (for cross-platform mobile applications).

Here's a basic example of how you might define routes using React Router in a React application:

```jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div>Home Page</div>;
}

function About() {
  return <div>About Page</div>;
}

function Contact() {
  return <div>Contact Page</div>;
}

export default App;
```

In this example, React Router handles the navigation between the Home, About, and Contact components based on the URL.
