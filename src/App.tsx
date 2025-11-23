import '@mantine/core/styles.css';
// import '@mantine/notifications/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { Layout } from '@/components/Layout/Layout';
import { Provider } from 'react-redux';
import store, { persistor } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import appConfig from './configs/app.config';
import { mockServer } from './mock/mock';
import { ModalsProvider } from '@mantine/modals';
import './index.css';
// import { Notifications } from '@mantine/notifications';
import { useState } from 'react';

export default function App() {
 
  if (appConfig.enableMock) {
    mockServer();
  }
 const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');

  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };


  return (
<MantineProvider theme={theme} forceColorScheme={colorScheme} withCssVariables withGlobalClasses>
      <ModalsProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              {/* <Notifications /> */}
              <Layout colorScheme={colorScheme} toggleColorScheme={toggleColorScheme} />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </ModalsProvider>
    </MantineProvider>
  );
}
