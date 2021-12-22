import { PainRecord, PainProvider } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const examplePain: PainRecord = {
  default: { name: 'Default' },
  pain1: { name: 'pain 1' },
  pain2: { name: 'pain 2' },
};

export const decorators = [
  (Story) => (
    <PainProvider pain={examplePain} painDefault="default">
      {Story()}
    </PainProvider>
  ),
];
