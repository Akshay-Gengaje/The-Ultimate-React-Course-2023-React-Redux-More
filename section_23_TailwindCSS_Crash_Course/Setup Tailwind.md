# Setup Tailwind on Vite App

Setting up Tailwind CSS for a Vite app is a straightforward process that involves installing the necessary dependencies, generating configuration files, and adding Tailwind directives to your CSS. Here's a step-by-step guide:

1. **Install Tailwind CSS and Dependencies:**
   Open your terminal and navigate to the directory where you want to create your Vite app. Run the following command to install Tailwind CSS and its peer dependencies:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. **Generate Configuration Files:**
   After installing the dependencies, generate the Tailwind configuration files using the following command:

   ```bash
   npx tailwindcss init -p
   ```

   This will create two configuration files: `tailwind.config.js` and `postcss.config.js`. These files define the Tailwind configuration and PostCSS plugins required for Tailwind CSS to work.

3. **Configure Source Paths:**
   In the `tailwind.config.js` file, modify the `content` property to specify the paths of your HTML and JavaScript files that contain Tailwind classes. This ensures that Tailwind scans these files to identify classes and generate the corresponding CSS.

   ```js
   /** @type {import('tailwindcss').Config} */
   export default {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

4. **Add Tailwind Directives:**
   In your CSS files, add the following directives to import Tailwind's base styles, components, and utilities:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

   This will allow you to use Tailwind classes in your CSS.

5. **Start Vite Server:**
   Run the following command to start the Vite development server:

   ```bash
   npm run dev
   ```

   This will open your Vite app in your browser, and you can start using Tailwind CSS classes to style your components.

With these steps, you have successfully set up Tailwind CSS for your Vite app and can start styling your web pages using Tailwind's utility classes.
