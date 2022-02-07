import 'theme/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from 'global';
import { SessionProvider } from 'next-auth/react';
import MainLayout from '@components/layouts/MainLayout';
import NextProgress from 'next-progress';
import DismissableToast from '@components/ui/DismissableToast';

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <SessionProvider session={session}>
      <MainLayout>
        <NextProgress />
        <DismissableToast />
        <Component {...pageProps} />
      </MainLayout>
    </SessionProvider>
  );
};

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ Component, ctx }) => {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps({ ...ctx, store })
            : {}),
          pathname: ctx.pathname,
        },
      };
    }
);

export default wrapper.withRedux(MyApp);
