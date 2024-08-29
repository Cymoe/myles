// app/page.tsx
import { redirect } from 'next/navigation';

export default function IndexRedirect() {
  // Redirect from root URL to the /home route
  redirect('/home');
}
