import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>This is error page</h1>
      <i>{error.statusText || error.message}</i>
    </div>
  );
}
