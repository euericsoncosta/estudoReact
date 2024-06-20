import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'; // Corrected import of PropTypes

const MyRoute = ({ component: Component, isClosed, ...rest }) => {
  const isLoggedIn = false;
  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { prevPath: rest.location.pathname },
        }}
      />
    );
  }
  return <Route {...rest} component={Component} />; // Corrected usage of Route component prop
};

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func])
    .isRequired, // Corrected PropTypes for component
  isClosed: PropTypes.bool,
};

export default MyRoute;
