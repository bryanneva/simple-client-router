import * as React from 'react';
import {useState} from 'react';
import {Router} from "../index";
import {fireEvent, render} from "@testing-library/react";

function MockRouterComponent({router}: { router: Router }) {
  const [currentRoute, setCurrentRoute] = useState<string>(router.getCurrentPath());
  router.subscribe(setCurrentRoute);

  return (
    <div>
      <button onClick={() => {
        router.goTo('a')
      }}>A
      </button>
      <button onClick={() => {
        router.goTo('b')
      }}>B
      </button>
      {currentRoute === 'a' && <div>Foo</div>}
      {currentRoute === 'b' && <div>Bar</div>}
    </div>
  );
}

describe('React Integration', () => {
  it('integrates with useState', () => {
    const router = new Router();
    router.register('a', '/a');
    router.register('b', '/b');
    const {getByText} = render(<MockRouterComponent router={router}/>);

    fireEvent.click(getByText('A'));

    getByText('Foo');
    expect(window.location.pathname).toEqual('/a');

    fireEvent.click(getByText('B'));

    getByText('Bar');
    expect(window.location.pathname).toEqual('/b');
  });
});
