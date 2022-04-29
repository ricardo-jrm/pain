<div align="center">

# ⚫ `@ricardojrmcom/pain`

<b>React meta data utility</b>

![build](https://img.shields.io/github/workflow/status/ricardojrmcom/pain/Continuous%20Integration?style=for-the-badge)
![license](https://img.shields.io/github/license/ricardojrmcom/pain?style=for-the-badge)

![author](<https://img.shields.io/badge/Author-Ricardo%20%3Cl1b3r__--%3E%20Mota%20(%40ricardojrmcom)-orange?style=for-the-badge>)

![lang](https://img.shields.io/github/languages/top/ricardojrmcom/pain?style=for-the-badge)
![version](https://img.shields.io/npm/v/@ricardojrmcom/pain?style=for-the-badge)
![size](https://img.shields.io/bundlephobia/min/@ricardojrmcom/pain?style=for-the-badge)

</div>

<br />

---

<br />

### <b>Install</b>

```ts
npm install @ricardojrmcom/pain

yarn add @ricardojrmcom/pain
```

<br />

### <b>Usage</b>

```ts
import { usePain, PainProvider, PainRecord } from '@ricardojrmcom/pain';

// app
const examplePain: PainRecord = {
  default: { name: 'Default' },
  pain1: { name: 'pain 1' },
  pain2: { name: 'pain 2' },
};

<PainProvider pain={examplePain} painDefault="default">
  {...}
</PainProvider>


// component
const { painActive, painActiveId, painSetById } = usePain();
```

<br />

---

<br />

### <b>License</b>

[MIT](https://github.com/ricardojrmcom/pain/blob/main/LICENSE) © Ricardo <l1b3r\_-> Mota ([@ricardojrmcom](https://github.com/ricardojrmcom))

Bootstrapped with 🟣[@ricardojrmcom/supernova](https://github.com/ricardojrmcom/supernova)

<br />
