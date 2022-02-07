import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Button from './Button';

export default function AccessDenied() {
  const router = useRouter();

  return (
    <div className='pt-8 p-4 space-y-8'>
      <div className='space-y-2'>
        <h1 className='text-xl font-bold'>Access Denied</h1>
        <p className='text-xs'>( Protected and session handled by nextauth )</p>
      </div>

      <p>You must be signed in to view this page</p>

      <div className='space-x-2'>
        <Button onClick={() => signIn()}>Sign In</Button>
        <Button onClick={() => router.push('/')}>Back to Home</Button>
      </div>
    </div>
  );
}
