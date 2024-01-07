# Habit Tracker API

The Habit Tracker API is a Java-based application built with Spring Boot that allows you to track and manage your daily habits. It provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on habits, allowing you to add, retrieve, update, and delete habits from the system.

## Prerequisites

Before running the application, ensure that you have the following prerequisites installed:

- Java Development Kit (JDK) 8 or later
- Maven
- PostgreSQL database

## Getting Started

**Note:** The Habit Tracker API is configured to run on your local machine and is intended for development and testing purposes. It is not recommended to deploy this application as is to a production environment without further configuration and security measures.

To get started with the Habit Tracker API, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/simo-02/Habit-Tracker-Api.git
   ```

2. Navigate to the project directory:

   ```
   cd habit-tracker-api
   ```

3. Configure the database connection:

   - Open the `src/main/resources/application.properties` file.
   - Modify the database connection properties to match your PostgreSQL database configuration.
   - Save the file.

4. Build the project using Maven:

   ```
   mvn clean install
   ```

5. Run the application:

   ```
   mvn spring-boot:run
   ```

   The Habit Tracker API will now be accessible at `http://localhost:8080/api/v1/habit`.

## API Endpoints

The following endpoints are available in the Habit Tracker API:

- `GET /api/v1/habit` - Retrieve all habits.
- `POST /api/v1/habit` - Create a new habit.
- `PUT /api/v1/habit/{id}` - Update a habit's name and description by its ID.
- `DELETE /api/v1/habit/{id}` - Delete a habit by its ID.
- `POST /api/v1/habit/{id}/track` - Track the progress of a habit by its ID.

Please refer to the API documentation or the code itself for detailed information on the request and response structures for each endpoint.

## Example Usage

To create a new habit, you can send a POST request to `/api/v1/habit` with the following JSON payload:

```json
{
  "name": "Exercise",
  "description": "Go for a 30-minute jog in the morning."
}
```

Similarly, to update a habit's name and description, send a PUT request to `/api/v1/habit/{id}` with the habit ID as a path parameter and the updated name in the request body.

To track the progress of a habit, send a POST request to `/api/v1/habit/{id}/track` with the habit ID as a path parameter and the tracking value in the request body.

For more details on how to interact with the API, refer to the API documentation or test the endpoints using an API testing tool like Postman.

## Contributing

Contributions to the Habit Tracker API project are welcome. If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## Contact

For any inquiries or questions, please contact [Simeon Milanov,Mert Miftar,Stefan Vitanov](mailto:milanov.simeon@yahoo.com, mert.miftar7@gmail.com, vitanov.stefan@yahoo.com).
