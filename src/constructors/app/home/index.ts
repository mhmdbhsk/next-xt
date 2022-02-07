import { appActionCreators, homeActionCreators, wrapper } from '@global';
import { ThemeAppEnum } from '@global/reducers/App';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from './components';
import { updateDataHome } from './store/action-creators';

export const getProps = wrapper.getServerSideProps((store) => async () => {
  await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => store.dispatch(updateDataHome(json)));

  return { props: {} };
});

function mapStateToProps(state: StateType) {
  return {
    theme: state.app.theme,
    home: state.home,
    data: state.home.data,
  };
}

function mapDispatchToProps() {
  const dispatch = useDispatch();
  const { increaseCountHome, decreaseCountHome } = bindActionCreators(
    homeActionCreators,
    dispatch
  );
  const { updateThemeApp } = bindActionCreators(appActionCreators, dispatch);

  return {
    handler: {
      increase() {
        increaseCountHome();
      },
      decrease() {
        decreaseCountHome();
      },
      theme(value: ThemeAppEnum) {
        updateThemeApp(value);
      },
    },
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export type HomeReduxProps = ConnectedProps<typeof connector>;

export default connector(Page);
