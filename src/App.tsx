import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProtectedRoutes, PublicRoutes } from './routes';
import AuthMiddleware from './routes/route';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Router>
      <Routes>
        {PublicRoutes.map((route, idx) => (
          <Route
            key = {idx}
            path = {route.path}
            element = {route.component}
          />
        ))}
        {AuthProtectedRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element = {
              <AuthMiddleware>
                {route.component}
              </AuthMiddleware>
            }
          />
        ))}
      </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
