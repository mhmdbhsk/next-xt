import { signIn } from 'next-auth/react';
import Button from './Button';

export default function AccessDenied() {
  return (
    <div className='pt-8 p-4 space-y-8'>
      <div className='space-y-2'>
        <h1 className='text-xl font-bold'>Access Denied</h1>
        <p className='text-xs'>( Protected and session handled by nextauth )</p>
      </div>

      <p>You must be signed in to view this page</p>

      <Button onClick={() => signIn()}>Sign In</Button>
    </div>
  );
}
