// @ts-nocheck
import React, { ReactElement, useEffect, useState } from "react";
import { createStore } from "redux";

interface CreateRouter {
  getCurrentRoute: () => React.ComponentType;
  Link: (props: LinkProps) => JSX.Element;
  Router: React.ComponentType;
  routerConnect: (component: React.ComponentType) => JSX.Element;
}

function createRouter(): CreateRouter {
  const SELECT_COMPONENT = "SELECT_COMPONENT";
  const reducer = (state, action): ReactElement => action.type == SELECT_COMPONENT ? action.payload : state;
  const store = createStore(reducer);

  function go(to: ReactElement): void {
    return store.dispatch({ type: SELECT_COMPONENT, payload: to});
  }

  interface LinkProps {
    to: React.ComponentType;
    children: ReactElement;
  }

  const Router = ({ children }): JSX.Element => {
    const childArray = React.Children.toArray(children);
    const [selectedComponent, setState] = useState();
    const isSelected = (e: JSX.Element): boolean => e.type.displayName === selectedComponent?.displayName;

    useEffect(() => store.subscribe(() => setState(store.getState())));

    return childArray.find(isSelected) || childArray.pop();
  };

  const Link = ({
    to,
    children,
  }: LinkProps): JSX.Element => {
    const child = React.Children.only(children);

    return React.cloneElement(child, {
      onPress: () => go(to),
    });
  };

  const ConnectedRouter = ({
    children,
  }): JSX.Element => {
    const [_currentRoute, setState] = useState();

    useEffect(() => {
      return store.subscribe(() => setState(store.getState()));
    });

    return React.cloneElement(children, {
      _currentRoute,
    });
  };

  function routerConnect(Component: React.ComponentType): JSX.Element {
    // eslint-disable-next-line react/display-name
    return (): React.ComponentType => (
      <ConnectedRouter>
        <Component />
      </ConnectedRouter>
    );
  }

  return {
    Link,
    Router,
    getCurrentRoute: (): React.ComponentType => Object.seal(store.getState()),
    routerConnect,
  };
}

export default createRouter;
