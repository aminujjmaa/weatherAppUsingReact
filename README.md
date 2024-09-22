# weatherAppUsingReact

A responsive weather application that allows users to search for current weather data and a five-day forecast for any city.

## Setup Instructions

To run the project locally, follow these steps:

1. Clone the Repository
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
2. Install Dependencies Make sure you have Node.js installed. Then run:
   ```bash
   npm start

4. Set Up Your API Key

    Sign up at OpenWeather to get your API key.
    Replace your_api_key in src/App.jsx with your actual API key.
5. Run the Project
   ```bash
   npm run dev


This will start the development server. Open your browser and navigate to http://localhost:3000.





Assumptions:
The user has an active internet connection to fetch weather data.
The application relies on the OpenWeather API for real-time weather data.
The user is familiar with basic usage of a web application.

How to Use the Application:

    *Search for a City
       Type the name of a city into the search bar and press enter or click the search icon.
    *View Weather Information
       The application displays the current weather information and a five-day forecast for the selected city.
       You can switch between Celsius and Fahrenheit using the toggle button.
    *Refresh Data
      Click the "Refresh Data" button to fetch the latest weather data for the currently selected city.


Features:

    Local Storage: The app saves the last searched city in local storage, so the user can quickly access it upon returning to the app.
    Refresh Button: A refresh button allows users to fetch the latest weather data for the currently selected city, with a visual blink effect for better user feedback.

Deployed Application

You can test the application online at the following link: 
