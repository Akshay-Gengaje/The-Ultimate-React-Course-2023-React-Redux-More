## Summary
* 🚀 Setting up the "usePopcorn" React project for learning purposes.

## Highlights
- To start the project, use npx create-react-app with version five and the name "usepopcorn."
- The "usePopcorn" app is focused on movies and utilizes React hooks.
- It features real data fetching from an API and allows users to search for and rate movies.
- Users can add movies to their watchlist, view statistics, and delete movies.
- The project is divided into three sections, with the first section focusing on creating the layout and discussing component reusability.
- The app gradually becomes more sophisticated as it progresses through the sections.


# When to create new component?

Certainly! Here's the information converted to Markdown format:

### When to Create a New Component in React

1. **Single Responsibility Principle (SRP):** Each component should have a single responsibility or concern. When a part of your UI or functionality serves a distinct purpose or can be isolated, it's a good candidate for a new component. For example, a "Header" component should only handle header-related content and behavior.

2. **Reusability:** If a piece of UI or functionality is used in multiple places or could potentially be reused across different parts of your application, consider creating a reusable component. This promotes code reusability and reduces duplication.

3. **Readability and Maintainability:** Creating components helps improve the readability of your code by breaking it into smaller, more manageable pieces. When a portion of your code becomes too complex or lengthy, it's a sign that it may be time to extract it into a new component.

4. **Complex Logic:** If a part of your application involves complex logic, such as data manipulation, calculations, or state management, encapsulate that logic within a component. This keeps your code organized and easier to test.

5. **Testing:** Components are easier to test in isolation. If you find that testing a particular feature or behavior is challenging because it's tightly coupled with other parts of your code, consider creating a separate component for testing purposes.

6. **Data Flow:** When different parts of your UI need to communicate or share data, using components can help manage data flow. You can pass data between parent and child components using props or utilize state management solutions like Redux or the React Context API.

7. **UI Composition:** If your UI can be broken down into smaller, composable pieces, creating components for each part allows you to compose the final UI by combining these smaller building blocks.

8. **Code Separation:** Create components to separate concerns and enforce a clear separation of concerns within your application. This makes it easier to reason about your codebase and makes it more maintainable.

9. **Accessibility:** Components can be designed and tested for accessibility independently. When you have complex UI elements or interactive features, consider creating components that adhere to accessibility best practices.

10. **Project Structure:** Organizing your project with a component-based structure can make it easier to navigate and maintain. Each component should ideally have its own file and folder structure.

11. **Performance Optimization:** Breaking down a large, performance-critical part of your application into smaller components can make it easier to optimize the performance of specific sections, such as lazy loading or implementing shouldComponentUpdate checks.

Remember that over-complicating your application with too many small components can also lead to maintenance challenges. Strive for a balance between breaking your UI into manageable pieces and keeping the codebase cohesive and comprehensible. Regularly review your code and refactor as needed to maintain a clean and organized architecture.