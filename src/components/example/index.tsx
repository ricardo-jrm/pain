import React from 'react';
import { usePain } from '../../index';

/**
 * ExampleComponent
 */
export const ExampleComponent = ({ text }: ExampleComponentProps) => {
  const { metaActive, metaSetById } = usePain();

  return (
    <div>
      <div data-testid="test-component">{`${metaActive.name}: ${text}`}</div>
      <div>
        <button type="button" onClick={() => metaSetById('meta1')}>
          Meta 1
        </button>
        <button type="button" onClick={() => metaSetById('meta2')}>
          Meta 2
        </button>
        <button type="button" onClick={() => metaSetById('default')}>
          Meta Default
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
