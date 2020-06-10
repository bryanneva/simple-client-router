import {Router} from "../Router";

describe('Router', () => {
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

  test('getCurrentPath', () => {
    const router = new Router('foo');
    const currentPath = router.getCurrentPath()
    expect(currentPath).toEqual('foo');
  });

  test('register', () => {
    const router = new Router();
    const route = router.register('foo', '/foo');
    expect(router.routes['foo']).toEqual(route);
  });
});
