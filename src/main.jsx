import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './layouts/Root';
import Home from './pages/Home';
import AllArtAndCraft from './pages/AllArtAndCraft';
import Register from './pages/Register';
import FirebaseProvider from './provider/FirebaseProvider';
import Login from './pages/Login';
import AddCraftItem from './pages/AddCraftItem';
import ItemDetails from './pages/ItemDetails';
import MyArtAndCraft from './pages/MyArtAndCraft';
import UpdateItem from './pages/UpdateItem';
import PrivateRoute from './components/private route/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/item')
      },
      {
        path: "/All Art & craft Items",
        element: <AllArtAndCraft></AllArtAndCraft>,
        loader: () => fetch('http://localhost:5000/item')
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/Add Craft Item",
        element: <PrivateRoute>
          <AddCraftItem></AddCraftItem>
        </PrivateRoute>
      },
      {
        path: "/itemDetails/:id",
        element: <PrivateRoute>
          <ItemDetails></ItemDetails>
        </PrivateRoute>,
      },
      {
        path: "/myArtAndCraft",
        element: <PrivateRoute>
          <MyArtAndCraft></MyArtAndCraft>
        </PrivateRoute>
      },
      {
        path: "/updateItem/:id",
        element: <UpdateItem></UpdateItem>
      }

    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)
