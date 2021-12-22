import { PainMetas, PainProvider } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const tempMetas: PainMetas = {
  default: { name: 'Default' },
  meta1: { name: 'Meta 1' },
  meta2: { name: 'Meta 2' },
};

export const decorators = [
  (Story) => (
    <PainProvider metas={tempMetas} metasDefault="default">
      {Story()}
    </PainProvider>
  ),
];
