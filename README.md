# React Blog Application

A modern, responsive blog application built with React that allows users to create, read, and delete blog posts. This application demonstrates core React concepts including hooks, custom hooks, routing, and state management. 

## Features

The application includes several key features:
- View a list of all blog posts on the home page
- Create new blog posts with a title, content, and author
- View detailed information for individual blog posts
- Delete existing blog posts
- Responsive navigation between different sections
- Error handling and loading states

## Project Structure

The application is organized into several key components:

```
react-blog/
│
├── src/
│   ├── App.js                 # Main application component and routing
│   ├── Home.js               # Home page component
│   ├── Navbar.js             # Navigation bar component
│   ├── BlogList.js           # Component for displaying list of blogs
│   ├── BlogDetails.js        # Component for individual blog view
│   ├── Create.js             # New blog creation form
│   ├── NotFound.js           # 404 error page
│   ├── useFetch.js           # Custom hook for data fetching
│   ├── index.js              # Application entry point
│   └── index.css             # Global styles
```

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
cd react-blog
npm install
```

3. Start the JSON server (for development):
```bash
npx json-server --watch data/db.json --port 8000
```

4. Start the development server:
```bash
npm run start
or
npm start
```

The application will be available at `http://localhost:3000`

## Technical Implementation

### Custom Hook: useFetch

The application implements a custom hook `useFetch` for data fetching that provides:
- Reusable data fetching logic
- Loading states
- Error handling
- Request abortion on component unmount

### Routing

React Router is used for navigation with the following routes:
- `/` - Home page displaying all blogs
- `/create` - Form for creating new blogs
- `/blogs/:id` - Individual blog post view
- `*` - 404 Not Found page

### State Management

The application uses React's built-in state management through:
- `useState` for local component state
- Props for component communication
- Custom hooks for shared state logic

## Styling

The application uses custom CSS with:
- Responsive design
- Clean, modern aesthetic
- Hover effects
- Consistent color scheme
- Mobile-friendly layout

## Error Handling

The application includes comprehensive error handling:
- Network request errors
- 404 page for non-existent routes
- Loading states during data fetching
- Form validation for blog creation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgments

- Built with [React](https://reactjs.org/)
- Routing powered by [React Router](https://reactrouter.com/)
- Development data served by [JSON Server](https://github.com/typicode/json-server)
