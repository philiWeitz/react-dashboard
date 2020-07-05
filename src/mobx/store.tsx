import { enableLogging, IMobXLoggerConfig } from 'mobx-logger';
import { Provider as MobxProvider } from 'mobx-react';
import React, { FC } from 'react';
import { AppStateStore } from './stores/app-state-store';

const stores = {
  appState: new AppStateStore(),
};

const mobxLoggerConfig: IMobXLoggerConfig = {
  action: true,
  compute: true,
  predicate: () => true,
  reaction: true,
  transaction: true,
};

export const Provider: FC = ({ children }) => {
  const createDevelopmentProvider = () => {
    (window as any).stores = stores;

    // configure the mobX logger
    enableLogging(mobxLoggerConfig);

    return createProductionProvider();
  };

  const createProductionProvider = () => {
    return (
      <MobxProvider {...stores}>
        <div>{children}</div>
      </MobxProvider>
    );
  };

  if (process.env.NODE_ENV !== 'production') {
    return createProductionProvider();
  }
  return createDevelopmentProvider();
};
