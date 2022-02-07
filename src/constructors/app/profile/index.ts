import { wrapper } from '@global';
import { connect } from 'react-redux';
import Page from './components';

export const getProps = wrapper.getServerSideProps((store) => async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1').then(
    (response) => response
  );

  return { props: { res } };
});

export default connect((state: StateType) => state)(Page);
