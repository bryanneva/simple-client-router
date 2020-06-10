import {Router} from "../Router";
import {useState} from "react";

export function useRouter(router: Router): [string, (value: string) => void] {
  const [currentRoute, setCurrentRoute] = useState(router.getCurrentPath());
  router.subscribe(setCurrentRoute);

  return [currentRoute, router.goTo];
}
