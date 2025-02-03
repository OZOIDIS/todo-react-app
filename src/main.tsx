import './index.css'
import App from './App.tsx'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TaskPage from './pages/TaskPage.tsx'


// Define routes with `createBrowserRouter`
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,  // The component rendered for '/' path
  },
  {
    path: '/tasks/:id',
    element: <TaskPage />,  // The component rendered for '/tasks/:id' path
  },
]);

// Find the 'root' DOM element and render the app inside it
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Render the RouterProvider to manage routing
root.render(
  <RouterProvider router={router} />
);

/* createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
) */
