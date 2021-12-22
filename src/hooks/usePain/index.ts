import { useContext, createContext } from 'react';

export type PainMetas = {
  [x: string]: PainMeta;
};

export type PainMeta = {
  name: string;
  legalName?: string;
  trademark?: string;
  domain?: string;
  logo?: string;
  assets?: {
    [x: string]: string;
  };
};

/**
 * Context interface
 */
export interface PainContextType {
  /**
   * Active brand ID
   */
  metaActive: PainMeta;
  /**
   * Set meta by ID
   */
  metaSetById: (metaId: string) => void;
}

/**
 * Initial value
 */
const init: PainContextType = {
  metaActive: {
    name: 'Default',
  },
  metaSetById: () => undefined,
};

/**
 * PainContext
 */
export const PainContext = createContext<PainContextType>(init);

/**
 * usePain
 */
export const usePain = () => useContext(PainContext);