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
// app
import { PainProvider, PainMetas, usePain } from '@ricardo-jrm/Pain';

const exampleMetas: PainMetas = {
  meta1: { name: 'Meta 1' },
  meta2: { name: 'Meta 2' },
};

<PainProvider
  metas={exampleMetas}
  metasDefault="meta1"
>
  {...}
</PainProvider>


// component
const { metaActive, metaSetById } = usePain();
```

<br />

---

<br />

### <b>License</b>

[MIT](https://github.com/ricardo-jrm/pain/blob/main/LICENSE) © Ricardo <l1b3r\_-> Mota ([@ricardo-jrm](https://github.com/ricardo-jrm))

Bootstrapped with 🟣[@ricardo-jrm/supernova](https://github.com/ricardo-jrm/supernova)

<br />
