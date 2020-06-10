import {Observable} from "../Observable";

describe('Observable', () => {
  test('subscribe', () => {
    const observable = new Observable();
    const subscription = observable.subscribe(() => {});
    expect(observable.getSubscribers().length).toEqual(1);
    expect(subscription.observable).toEqual(observable);
  });

  test('updateSubscribers', () => {
    const subscriber = jest.fn();
    const observable = new Observable();
    observable.subscribe(subscriber);
    observable.updateSubscribers();
    expect(subscriber).toHaveBeenCalled();
  });

  // test.skip('unsubscribe', () => {
  //   const observable = new Observable();
  //   const subscriberCb = jest.fn();
  //   const subscription = observable.subscribe(subscriberCb);
  //   observable.unsubscribe(subscription);
  //   observable.updateSubscribers();
  //   expect(subscriberCb).not.toHaveBeenCalled();
  // });
});
