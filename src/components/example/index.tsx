import React from 'react';
import { usePain } from '../../index';

/**
 * ExampleComponent
 */
export const ExampleComponent = ({ text }: ExampleComponentProps) => {
  const { painActive, painActiveId, painSetById } = usePain();

  return (
    <div>
      <div data-testid="test-component">{`${painActive.name} (${painActiveId}): ${text}`}</div>
      <div>
        <button type="button" onClick={() => painSetById('pain1')}>
          Pain 1
        </button>
        <button type="button" onClick={() => painSetById('pain2')}>
          Pain 2
        </button>
        <button type="button" onClick={() => painSetById('default')}>
          Pain Default
        </button>
      </div>
    </div>
  );
};

/**
 * ExampleComponent props
 */
export interface ExampleComponentProps {
  /**
   * Prop
   */
  text: string;
}
