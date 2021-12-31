import { useContext, createContext } from 'react';

/**
 * Schema of Pain
 */
export type PainData = {
  name: string;
  legalName?: string;
  title?: string;
  description?: string;
  trademark?: string;
  domain?: string;
  logo?: string;
  favicon?: string;
  image?: string;
  assets?: {
    [x: string]: string;
  };
};

/**
 * Record of Pain
 */
export type PainRecord = {
  [x: string]: PainData;
};

/**
 * Context interface
 */
export interface PainContextType {
  /**
   * Active pain
   */
  painActive: PainData;
  /**
   * Active pain id
   */
  painActiveId: string;
  /**
   * Set pain by ID
   */
  painSetById: (painId: string) => void;
}

/**
 * Initial value
 */
const init: PainContextType = {
  painActive: {
    name: 'Default',
  },
  painActiveId: 'default',
  painSetById: () => undefined,
};

/**
 * PainContext
 */
export const PainContext = createContext<PainContextType>(init);

/**
 * usePain
 */
export const usePain = () => useContext(PainContext);
