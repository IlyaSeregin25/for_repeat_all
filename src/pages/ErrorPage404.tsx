import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage404 = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="container">
      -------------------------ERROR PAGE------------------------------------
      <h1>{error.statusText}</h1>
      <p>{error.data}</p>
      <button onClick={() => navigate('/')}>Home Page</button>
    </div>
  );
};

export default ErrorPage404;
