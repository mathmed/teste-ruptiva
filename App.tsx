import React from 'react';
import { Provider } from 'react-redux';
import RegisterScreen from './src/app/screens/Register';
import store from './src/app/core/redux/store';

const App: React.FC = () => {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <RegisterScreen />
    </Provider>
  );
};

export default App;
