import useCurrentUser from './useCurrentUser.js';

export default function useIsAuthenticated() {
  return Boolean(useCurrentUser());
}
