import Container from '@components/ui/Container';
import { ReactNode } from 'react';

type MainLayout = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayout) => {
  return <Container>{children}</Container>;
};

export default MainLayout;
