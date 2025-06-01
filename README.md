# Task Manager API

A lightweight RESTful API built with Spring Boot to manage tasks. Allows users to create, retrieve, update, and delete tasks.

---

## Features

- Create new tasks  
- Retrieve all tasks or a specific task by ID  
- Update task details  
- Delete tasks  
- Tested with Postman for all endpoints  

---

## Technologies Used

- **Java 21**  
- **Spring Boot 3**  
- **Spring Web**  
- **Maven**  

---

## API Endpoints

| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| GET    | `/tasks`         | Get all tasks             |
| GET    | `/tasks/{id}`    | Get task by ID            |
| POST   | `/tasks`         | Create a new task         |
| PUT    | `/tasks/{id}`    | Update an existing task   |
| DELETE | `/tasks/{id}`    | Delete a task             |

---

## Getting Started

### Prerequisites

- Java 21+  
- Maven  

### Run Locally

```bash
git clone https://github.com/ZohaibVehra/task-manager-api.git
cd task-manager-api
mvn spring-boot:run
```

---

## Sample Request (JSON)

### Create Task

```json
{
  "title": "Finish README",
  "description": "Write the documentation for this project"
}
```

---

## Author

| GitHub |
|--------|
| [*ZohaibVehra*](https://github.com/ZohaibVehra) |

---

## License

MIT License
