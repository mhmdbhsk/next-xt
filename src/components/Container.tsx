import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className='container max-w-xl m-auto'>{children}</div>;
};

export default Container;
