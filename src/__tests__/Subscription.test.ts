import {Subscription} from "../Subscription";
import {Observable} from "../Observable";

describe('Subscription', () => {
  // test.skip('unsubscribe', () => {
  //   const observable = new Observable();
  //   const callback = jest.fn();
  //   const subscription: Subscription = observable.subscribe(callback);
  //   subscription.unsubscribe();
  //   expect(observable.getSubscribers().length).toEqual(0);
  // });

  test('update', () => {
    const subscriber = jest.fn();
    const subscription = new Subscription(new Observable(), subscriber, 0);
    subscription.update();
    expect(subscriber).toHaveBeenCalled();
  });
});
