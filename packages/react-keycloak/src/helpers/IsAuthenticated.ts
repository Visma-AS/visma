import renderChildrenOrFallback from '@postinumero/react-auth/lib/renderChildrenOrFallback.js';
import useIsAuthenticated from './useIsAuthenticated.js';

export default renderChildrenOrFallback(useIsAuthenticated);
