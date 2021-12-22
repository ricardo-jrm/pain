import React, { useCallback, useMemo } from 'react';
import { useLocalState } from '@ricardo-jrm/use-local-state';
import { PainContext, PainContextType, PainMetas } from '../../hooks/usePain';

/**
 * PainProvider interface
 */
export interface PainProviderProps {
  /**
   * children
   */
  children: JSX.Element;
  /**
   * custom local storage ID prefix
   */
  lsid?: string;
  /**
   * Provided metas
   */
  metas: PainMetas;
  /**
   * Default meta ID
   */
  metasDefault: string;
}

/**
 * PainProvider
 */
export const PainProvider = ({
  children,
  lsid,
  metas,
  metasDefault,
}: PainProviderProps) => {
  // init active meta
  const [metaActiveId, metaActiveIdSet] = useLocalState(
    lsid || 'pain',
    metasDefault,
  );
  const metaActive = useMemo(() => metas[metaActiveId], [metas, metaActiveId]);

  // set meta by id
  const metaSetById = useCallback<PainContextType['metaSetById']>(
    (metaId) => {
      if (metas[metaId]) {
        metaActiveIdSet(metaId);
      } else {
        // eslint-disable-next-line no-console
        console.log('meta not found for given id: ', metaId);
      }
    },
    [metas, metaActiveIdSet],
  );

  // build ctx
  const ctxPain = useMemo<PainContextType>(
    () => ({
      metaActive,
      metaSetById,
    }),
    [metaActive, metaSetById],
  );

  return (
    <PainContext.Provider value={ctxPain}>{children}</PainContext.Provider>
  );
};
