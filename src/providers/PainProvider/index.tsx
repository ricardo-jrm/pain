import React, { useCallback, useMemo } from 'react';
import { useLocalState } from '@ricardo-jrm/use-local-state';
import {
  PainContext,
  PainContextType,
  PainData,
  PainRecord,
} from '../../hooks/usePain';

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
   * Provided pains
   */
  pains: PainRecord;
  /**
   * Default pain ID
   */
  painsDefault: string;
}

/**
 * PainProvider
 */
export const PainProvider = ({
  children,
  lsid,
  pains,
  painsDefault,
}: PainProviderProps) => {
  // init active pain
  const [painActiveId, painActiveIdSet] = useLocalState(
    lsid || 'pain',
    painsDefault,
  );
  const painActive = useMemo<PainData>(
    () => pains[painActiveId],
    [pains, painActiveId],
  );

  // set pain by id
  const painSetById = useCallback<PainContextType['painSetById']>(
    (painId) => {
      if (pains[painId]) {
        painActiveIdSet(painId);
      } else {
        // eslint-disable-next-line no-console
        console.warn('pain not found for given id: ', painId);
      }
    },
    [pains, painActiveIdSet],
  );

  // build ctx
  const ctxPain = useMemo<PainContextType>(
    () => ({
      painActive,
      painActiveId,
      painSetById,
    }),
    [painActive, painActiveId, painSetById],
  );

  return (
    <PainContext.Provider value={ctxPain}>{children}</PainContext.Provider>
  );
};
