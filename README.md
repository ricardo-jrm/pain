<div align="center">

# ⚫ `@ricardo-jrm/pain`

<b>React meta data utility</b>

![build](https://img.shields.io/github/workflow/status/ricardo-jrm/pain/Continuous%20Integration?style=for-the-badge)
![license](https://img.shields.io/github/license/ricardo-jrm/pain?style=for-the-badge)

![author](<https://img.shields.io/badge/Author-Ricardo%20%3Cl1b3r__--%3E%20Mota%20(%40ricardo--jrm)-orange?style=for-the-badge>)

![lang](https://img.shields.io/github/languages/top/ricardo-jrm/pain?style=for-the-badge)
![version](https://img.shields.io/npm/v/@ricardo-jrm/pain?style=for-the-badge)
![size](https://img.shields.io/bundlephobia/min/@ricardo-jrm/pain?style=for-the-badge)

</div>

<br />

---

<br />

### <b>Install</b>

```ts
npm install @ricardo-jrm/pain

yarn add @ricardo-jrm/pain
```

<br />

### <b>Usage</b>

```ts
import { usePain, PainProvider, PainRecord } from '@ricardo-jrm/pain';

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

[MIT](https://github.com/ricardo-jrm/pain/blob/main/LICENSE) © Ricardo <l1b3r\_-> Mota ([@ricardo-jrm](https://github.com/ricardo-jrm))

Bootstrapped with 🟣[@ricardo-jrm/supernova](https://github.com/ricardo-jrm/supernova)

<br />
