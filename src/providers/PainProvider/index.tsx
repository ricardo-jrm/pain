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
   * Provided pain record
   */
  pain: PainRecord;
  /**
   * Default pain ID
   */
  painDefault: string;
}

/**
 * PainProvider
 */
export const PainProvider = ({
  children,
  lsid,
  pain,
  painDefault,
}: PainProviderProps) => {
  // init active pain
  const [painActiveId, painActiveIdSet] = useLocalState(
    lsid || 'pain',
    painDefault,
  );
  const painActive = useMemo<PainData>(
    () => pain[painActiveId],
    [pain, painActiveId],
  );

  // set pain by id
  const painSetById = useCallback<PainContextType['painSetById']>(
    (painId) => {
      if (pain[painId]) {
        painActiveIdSet(painId);
      } else {
        // eslint-disable-next-line no-console
        console.warn('pain not found for given id: ', painId);
      }
    },
    [pain, painActiveIdSet],
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
