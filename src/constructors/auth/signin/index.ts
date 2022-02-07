import { wrapper } from '@global';
import { getProviders, getSession } from 'next-auth/react';
import Page from './components';

export const getProps = wrapper.getServerSideProps(() => async (context) => {
  const { req, query } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: query.callbackUrl as string,
        permanent: false,
      },
    };
  }

  return {
    props: { providers: await getProviders() },
  };
});

export default Page;
