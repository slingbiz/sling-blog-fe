import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {useStore} from '../redux/store';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../styles/index.css';
import '../utils/services/index';
import '../widgets/index';
import '../blocks/index';
import '../components/index';

import {
  GET_INIT_PROPS,
  CLIENT_KEY_SECRET,
  CLIENT_ID,
} from '../utils/constants/Services';
import axios from 'axios';
import AppLocale from '../utils/localization';
import SlingThemeProvider from '../utils/context/SlingThemeProvider';
import SlingStyleProvider from '../utils/context/SlingStyleProvider';
import ContextProvider from '../utils/context/ContextProvider';
import PageMeta from '../utils/context/PageMeta';
import LocaleProvider from '../utils/context/LocaleProvider';
import defaultConfig from '../utils/context/defaultConfig';

const MyApp = ({
  Component,
  pageProps,
  pageTemplate,
  initConfig,
  layoutConfig,
  routeConstants,
  apiResponse,
  query,
  error,
}) => {
  const store = useStore({
    ...pageProps,
    layout: {layoutConfig, pageTemplate},
    routeConstants,
    ssrApi: apiResponse,
    query,
  });

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  if (error) {
    // return <Error status={500} />;
  }
  return (
    <React.Fragment>
      <PageMeta />
      <ContextProvider
        initConfig={initConfig}
        layout={{layoutConfig, pageTemplate}}
        routeConstants={routeConstants}
        query={query}
        ssrApi={apiResponse}>
        <Provider store={store}>
          <SlingThemeProvider appLocale={AppLocale} theme={defaultConfig}>
            <SlingStyleProvider>
              <LocaleProvider appLocale={AppLocale}>
                <CssBaseline />
                <Component />
              </LocaleProvider>
            </SlingStyleProvider>
          </SlingThemeProvider>
        </Provider>
      </ContextProvider>
    </React.Fragment>
  );
};

const getHeaders = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    license: CLIENT_KEY_SECRET,
    client: CLIENT_ID,
  };
};

MyApp.getInitialProps = async (appContext) => {
  let response = {};
  const {ctx} = appContext;
  const {pathname, query, asPath} = ctx;
  console.log('[MyApp.getInitialProps]', pathname, query);
  try {
    //Fetch initial Layout based on url.
    response = await axios({
      url: `${GET_INIT_PROPS}`,
      method: 'POST',
      headers: getHeaders(),
      data: {pathname, query, asPath},
    });

    response = response.data;
  } catch (e) {
    console.log('[MyApp.getInitialProps] - Message', e.message);

    response = {
      initConfig: defaultConfig,
      layoutConfig: {},
      routeConstants: {},
      apiResponse: {},
      query: {},
      pageTemplate: '',
      error: true,
    };
  }

  return {...response, query};
};

export default MyApp;
