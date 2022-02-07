import Button from '@components/ui/Button';
import { ThemeAppEnum } from 'global/reducers/App';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { HomeReduxProps } from '..';

type HomeProps = HomeReduxProps;

const Home: NextPage<HomeProps> = ({ data, home, theme, handler }) => {
  const router = useRouter();

  return (
    <div className='container max-w-xl m-auto'>
      <div className='px-4 py-16 flex flex-col items-center space-y-2'>
        <span className='text-3xl font-bold'>▲ next-xt</span>
        <span className='text-xl font-bold'>An Opiniated Next JS Project</span>
        <span className='text-xs'>Made by Muhammad Bhaska </span>
      </div>

      <div className='p-4 space-y-8 flex flex-col'>
        <span className='text-2xl font-bold'>Example Components</span>

        <div className='flex flex-col space-y-2'>
          <span className='text-xl font-bold'>Counter</span>

          <div className='flex justify-center items-center'>
            <Button onClick={handler.decrease}>-</Button>
            <span className='flex-1 text-center'>{home.count}</span>
            <Button onClick={handler.increase}>+</Button>
          </div>
        </div>

        <div className='flex flex-col space-y-2'>
          <span className='text-xl font-bold'>App Theme</span>
          <span className='text-xs'>
            ( Persisting Redux State using next-redux-wrapper and
            next-redux-cookie-wrapper )
          </span>

          <div className='flex space-x-4 items-center'>
            <span>{theme}</span>
            <Button
              onClick={() =>
                handler.theme(
                  theme === ThemeAppEnum.DARK
                    ? ThemeAppEnum.LIGHT
                    : ThemeAppEnum.DARK
                )
              }
            >
              Change Theme
            </Button>
          </div>
        </div>

        <div className='flex flex-col space-y-2'>
          <span className='text-xl font-bold'>Routing</span>

          <div className='flex space-x-4 items-center'>
            <Button onClick={() => router.push('/profile')}>
              Go to Profile Page
            </Button>
            <Button onClick={() => router.push('/protected')}>
              Go to Protected Page
            </Button>
          </div>
        </div>

        <div className='flex flex-col space-y-2'>
          <span className='text-xl font-bold'>
            Getting Data from server-side
          </span>
          <span className='text-xs'>
            ( Data obtained from server using next-redux-wrapper
            getServerSideProps implementations, and sent to page using props )
          </span>

          <div className='flex pt-4 flex-col space-y-2 items-center'>
            {data?.map((item) => (
              <div key={item.id} className='w-full p-4 bg-slate-100 rounded'>
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
