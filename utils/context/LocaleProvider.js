import React, {useContext} from 'react';
import {IntlProvider} from 'react-intl';

import AppContext from './AppContext';
import PropTypes from 'prop-types';
import {IntlGlobalProvider} from './Utils';

const LocaleProvider = (props) => {
  const {appLocale} = props;
  const {locale} = useContext(AppContext);
  const currentAppLocale = appLocale[locale.locale];

  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}>
      <IntlGlobalProvider>{props.children}</IntlGlobalProvider>
    </IntlProvider>
  );
};

export default LocaleProvider;

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
