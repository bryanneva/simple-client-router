import * as React from "react";
import {Router} from "../../Router";
import {useRouter} from "../../react/useRouter";
import {render} from "@testing-library/react";

function MockComponent({router}: { router: Router }) {
  const [currentRoute] = useRouter(router);
  switch (currentRoute) {
    case 'foo':
      return <div>1</div>;
    case 'bar':
      return <div>2</div>;
    default:
      return <div>0</div>;
  }
}

test('useRouter', () => {
  const routes = {
    'foo': {name: 'foo', matcher: '/foo'},
    'bar': {name: 'bar', matcher: '/bar'},
  }
  const router = new Router({routes});

  const {getByText} = render(<MockComponent router={router}/>);
  router.goTo('foo');
  getByText('1');
  expect(window.location.pathname).toEqual('/foo');

  router.goTo('bar');
  getByText('2');
  expect(window.location.pathname).toEqual('/bar');
});
