import { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router-dom';

import { prefetchMap } from '../../routes';

const WAIT_MS = 2000;

export const usePrefetchPages = () => {
  const location = useLocation();
  const prefetchConf = prefetchMap.find(({ path }) =>
    matchPath(location.pathname, { path, exact: true }),
  );

  useEffect(() => {
    if (prefetchConf) {
      const id = setTimeout(() => {
        prefetchConf.prefetchComponents.forEach((component) => {
          try {
            component({ children: null });
          } catch {
            // NOOP
          }
        });
      }, WAIT_MS);

      return () => {
        clearTimeout(id);
      };
    }
  }, [prefetchConf]);
};
