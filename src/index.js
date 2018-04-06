import "es6-set/implement";
import Promise from "promise-polyfill";
// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}

import * as runtime from "offline-plugin/runtime";
if (
  process.env.NODE_ENV == "production" &&
  navigator.userAgent.indexOf("Prerender") == -1
) {
  runtime.install({
    onUpdateReady: () => {
      runtime.applyUpdate();
    },
    onUpdated: () => {
      window.location.reload();
    }
  });
}

import "intl";
import React from "react";
import ReactDom from "react-dom";
import ReactGA from "react-ga";
import { IntlProvider, addLocaleData } from "react-intl";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter as Router } from "react-router-redux";
import axios from "axios";

import configureStore from "store";
import Application from "app";

import en from "react-intl/locale-data/en";
import pt from "react-intl/locale-data/pt";
import es from "react-intl/locale-data/es";

addLocaleData([...en, ...pt, ...es]);
window.locales = ["en", "pt", "es"];

import localeData from "locales";

let query = {};
window.location.search
  .slice(1)
  .split("&")
  .map(item => {
    const arr = item.split("=");
    query[arr[0]] = arr[1];
  });

const language =
  query.lang ||
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

const findLocale = language => {
  let locale = false;
  const languageWRC = language.toLowerCase().split(/[_-]+/)[0];
  for (const key in localeData) {
    let keyWRC = key.toLowerCase().split(/[_-]+/)[0];
    if (
      !locale &&
      (key == language ||
        key == languageWRC ||
        keyWRC == languageWRC ||
        keyWRC == language)
    ) {
      locale = key;
    }
  }
  return locale;
};

window.locale = findLocale(language);

const messages = localeData[locale] || localeData.en;

const store = configureStore();
const history = createHistory();

const init = () => {
  ReactDom.render(
    <Provider store={store.store}>
      <PersistGate persistor={store.persistor} loading={null}>
        <IntlProvider locale={language} messages={messages}>
          <Router history={history}>
            <Application />
          </Router>
        </IntlProvider>
      </PersistGate>
    </Provider>,
    document.getElementById("app")
  );
};

if (process.env.LAUNCH_DATE) {
  axios.get("https://www.peixe.co/ds/date").then(res => {
    window.currentDate = res.data.date;
    init();
  });
} else {
  init();
}

if (process.env.GOOGLE_ANALYTICS) {
  ReactGA.initialize(process.env.GOOGLE_ANALYTICS);
  ReactGA.pageview(window.location.pathname + window.location.search);
  history.listen((location, action) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });
}
