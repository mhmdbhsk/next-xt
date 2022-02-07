import AccessDenied from '@components/ui/AccessDenied';
import Button from '@components/ui/Button';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Protected = () => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const [content, setContent] = useState();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/example');
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return <AccessDenied />;
  }

  return (
    <div className='pt-8 p-4 space-y-8'>
      <div className='space-y-2'>
        <h1 className='text-xl font-bold'>Protected Page</h1>
        <p className='text-xs'>( Protected and session handled by nextauth )</p>
      </div>

      <p>{content ?? '\u00a0'}</p>

      <div className='space-x-6'>
        <Button onClick={() => signOut()}>Sign Out</Button>
        <Button onClick={() => router.push('/')}>Back to Home</Button>
      </div>
    </div>
  );
};

export default Protected;
