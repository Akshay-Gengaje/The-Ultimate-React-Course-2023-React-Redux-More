#### Summary

This code represents a basic React application that fetches and displays random pieces of advice from an online API. It also keeps track of how many pieces of advice have been shown.

#### Highlights

- 💡 **useState and useEffect**: The code uses React's `useState` and `useEffect` hooks. These hooks allow us to manage and update the application's state (data) and execute functions at specific times during the component's lifecycle.

- 🌐 **Fetching Advice**: When the component loads, it calls the `getAdvice` function. Inside this function, it makes an asynchronous request to an advice API (`https://api.adviceslip.com/advice`) using the `fetch` method. This API provides random pieces of advice.

- 🖱️ **Button to Get Advice**: The code renders a button labeled "Get Advice." When this button is clicked, it triggers the `getAdvice` function, fetching and displaying new advice from the API.

- 📊 **Counting Advice**: The code keeps track of how many pieces of advice have been shown using the `count` state variable. It initially starts at 0 and is updated whenever a new piece of advice is fetched.

- 📜 **Message Component**: There's a separate `Message` functional component that receives the `count` as a prop and displays it as part of a message. It informs the user how many pieces of advice they have read.


