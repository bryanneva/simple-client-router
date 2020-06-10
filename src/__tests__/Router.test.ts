import {Router, RouteRegistry} from "../Router";

describe('Router', () => {

  describe('constructor config', () => {
    test('routes', () => {
      const routes: RouteRegistry = {
        'foo': {matcher: '/foo', name: 'foo'},
        'bar': {matcher: '/bar', name: 'bar'},
      }

      const router = new Router({routes});
      expect(router.routes['foo']).toBeTruthy();
    });

    test('currentRoute', () => {
      const router = new Router({currentRoute: 'foo'});
      const currentPath = router.getCurrentPath()
      expect(currentPath).toEqual('foo');
    });
  });

  test('register', () => {
    const router = new Router();
    const route = router.register('foo', '/foo');
    expect(router.routes['foo']).toEqual(route);
  });

  describe('goTo', () => {
    test('registered route', () => {
      const spy = jest.fn();
      window.history.pushState = spy;
      const router = new Router();
      router.register('foo', '/foo');
      router.updateSubscribers = jest.fn();
      router.goTo('foo');
      expect(spy).toHaveBeenCalledWith({page: 'foo'}, 'foo', '/foo');
      expect(router.updateSubscribers).toHaveBeenCalled();
      expect(router.getCurrentPath()).toEqual('foo');
    });

    test('unregistered route', () => {
      const spy = jest.fn();
      window.history.pushState = spy;
      const router = new Router();
      router.updateSubscribers = jest.fn();
      expect(() => router.goTo('not-registered')).toThrow();
      expect(spy).not.toHaveBeenCalled();
      expect(router.updateSubscribers).not.toHaveBeenCalled();
    });
  });
});
