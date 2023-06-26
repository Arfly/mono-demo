import { redirect } from 'react-router-dom';

export function rootLoader() {
  if (!localStorage.getItem('token')) {
    return redirect('/login');
  }
  return null;
}

export default function Root() {
  return <div>Root</div>;
}
