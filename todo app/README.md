# React Todo List

A simple Todo List application built with React using functional components and React Hooks.

## Features

* Add new todos
* Mark todos as completed
* Delete todos
* Dynamic UI updates using React state management

## Technologies Used

* React
* JavaScript (ES6+)
* CSS
* React Hooks (`useState`)

## Project Structure

```text
src/
├── App.js
├── styles.css
└── index.js
```

## How It Works

### Add Todo

Users can enter a task in the input field and click the **Add** button. A new todo item is added to the list.

### Toggle Todo Status

Each todo has a checkbox. Clicking the checkbox updates the completion status of the task.

### Delete Todo

Users can remove a task by clicking the **Delete** button.

## State Management

### Input State

```javascript
const [input, setInput] = useState("");
```

Stores the current value of the input field.

### Todo List State

```javascript
const [list, setList] = useState([]);
```

Stores all todo items.

Each todo object has the following structure:

```javascript
{
  id: 1,
  label: "Learn React",
  checked: false
}
```

## Running the Application

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project directory

```bash
cd react-todo-list
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

## Future Enhancements

* Edit existing todos
* Filter completed and pending tasks
* Persist data using Local Storage
* Add due dates and priorities
* Improve UI/UX design

## Learning Concepts Demonstrated

* Functional Components
* React Hooks
* State Management
* Event Handling
* Conditional Rendering
* List Rendering using `map`
* Immutable State Updates using `map` and `filter`
