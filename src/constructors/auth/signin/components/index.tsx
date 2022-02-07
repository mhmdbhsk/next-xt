import Button from '@components/ui/Button';
import { AppProviders } from 'next-auth/providers';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

type SignInProps = {
  providers: AppProviders;
};

export default function SignIn({ providers }: SignInProps) {
  const router = useRouter();

  return (
    <div className='h-screen flex'>
      <div className='p-12 border border-gray-200 shadow-[0px_0px_21px_rgba(0, 0, 0, 0.05)] rounded-lg w-80 m-auto space-y-8'>
        <div className='flex flex-col space-y-2'>
          <span className='text-xl font-bold'>Sign In</span>
          <span className='text-xs '>
            Sign to your account to access protected page
          </span>
        </div>

        <div className='space-y-4'>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <Button className='w-full' onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </Button>
            </div>
          ))}
          <Button
            className='w-full !bg-white hover:!bg-gray-100 shadow-none text-gray-400 hover:text-black'
            onClick={() => router.back()}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}
