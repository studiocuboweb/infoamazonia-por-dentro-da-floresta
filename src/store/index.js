import { compose, applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import reducers from 'reducers';
import middleware from 'middleware';

const createStoreWithDevTools = window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore;

export default function configureStore() {
  const createStoreWithMiddlewares = compose(applyMiddleware(...middleware))(createStoreWithDevTools);
  const store = createStoreWithMiddlewares(reducers());
  const persistor = persistStore(store);
  return { store, persistor };
}
