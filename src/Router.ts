import {Observable} from "./Observable";

export interface Route {
  readonly matcher: string
  readonly name: string
}

export class Router extends Observable {
  readonly routes: { [name: string]: Route } = {}

  constructor(private currentRoute?: string) {
    super();
  }

  getCurrentPath(): string {
    return this.currentRoute || '';
  }

  register(name: string, matcher: string): Route {
    const route = {matcher, name};
    this.routes[route.name] = route;
    return route;
  }

  goTo(name: string): void {
    if(name in this.routes) {
      this.currentRoute = name;
      window.history.pushState({page: name}, name, `/${name}`);
      this.updateSubscribers(name);
    } else {
      throw new Error(`Route ${name} not registered`);
    }
  }
}
