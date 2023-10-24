# Farm Tower Data Analysis Application

This project utilizes Python to access an API providing data about farm towers and conducts an analysis to identify the tower with the highest average RSSI (Received Signal Strength Indication) for a specific farm. The application is built with Python 3.11.5 as the backend and Flask framework. In the frontend, various libraries were employed using CDN, including Bootstrap, jQuery, Ajax, and Font Awesome.

## Prerequisites

Before you begin, ensure you have Python 3.11.5 installed on your system. Additionally, make sure to install the required dependencies specified in the `requirements.txt` file.

## Installation

1. **Python 3.11.5:** If you haven't installed Python 3.11.5, you can download it from the [official Python website](https://www.python.org/downloads/).

2. **Clone the Repository:**
   ```bash
   https://github.com/Mauricio9203/Farm-Tower-Data-Analysis
   cd Farm-Tower-Data-Analysis
   ```

3. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

## Running the Application

Once you have Python and the required dependencies installed, follow these steps to run the application:

1. **Navigate to the Project Directory:**
   ```bash
   cd path/to/Farm-Tower-Data-Analysis
   ```

2. **Run the Application:**
   ```bash
   python index.py
   ```

3. **Access the Application:**
   Open your web browser and go to `http://localhost:5000` to access the Farm Tower Data Analysis Application.

## Technologies Used

- **Backend:** Python 3.11.5, Flask
- **Frontend Libraries (CDN):**
  - Bootstrap
  - jQuery
  - Ajax
  - Font Awesome

## Usage

Upon accessing the application, you can input specific farm id, and the application will analyze the data from the API to identify the tower with the highest average RSSI for the provided farm.

## Additional Information

This repository includes the following files and directories:

- `index.py`: Main Python file for running the Flask application.
- `static/`: Directory containing static files such as CSS stylesheets and client-side scripts.
- `templates/`: Directory containing HTML templates used by the Flask application.
- `requirements.txt`: File specifying the Python packages and their versions required to run the application.

Feel free to explore and modify the code to suit your specific requirements. For any questions or issues, please contact [Mauricio Garrido](mailto:mauriciogarridonz@gmail.com).
