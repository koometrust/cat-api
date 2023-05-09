# Random Photo Project
This project is a simple React application that displays a random image every time the user clicks a button. It uses the Unsplash API to fetch random images and display them in the application.

# Getting Started
To get started with the project, you need to have Node.js and npm installed on your machine. Once you have these installed, follow the steps below:

Clone this repository to your local machine.
Navigate to the project directory in your terminal.
Run the following command to install the dependencies:
Copy code
npm install
After the dependencies are installed, start the application by running the following command:
sql
Copy code
npm start
The application will start in your default browser. Click the "Click me" button to display a random image.
How it Works
The application uses the useState hook in React to manage the state of the image URL. When the user clicks the "Click me" button, the callImg function is called, which fetches a random image from the Unsplash API and sets the URL as the new state.

The application then renders the new image using the img tag in HTML, with the URL being the value of the src attribute.

# Credits
This project was created by [Your Name] as a learning exercise. It uses the Unsplash API, which provides free-to-use images for personal and commercial projects.

# License
This project is licensed under the MIT License.




