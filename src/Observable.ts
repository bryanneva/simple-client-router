import {Subscriber, Subscription} from "./Subscription";

export class Observable {
  private id = 0;
  private subscribers: Subscription[] = [];

  subscribe(subscriber: Subscriber): Subscription {
    const subscription = new Subscription(this, subscriber, this.id++);
    this.subscribers.push(subscription);

    return subscription;
  }

  getSubscribers(): Subscription[] {
    return this.subscribers;
  }

  unsubscribe(subscription: Subscription) {
  }

  updateSubscribers() {
    this.subscribers.forEach(subscriber => subscriber.update());
  }
}
