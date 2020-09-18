import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('token');
    return (
        <div>
            <Route 
              render={() => {
                  if(token) {
                      return <Component />
                  } else {
                      return <Redirect to='/' />
                  }
              }}
            />
        </div>
    )
};

export default PrivateRoute;