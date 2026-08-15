# neumorph-ui

[![npm version](https://img.shields.io/npm/v/neumorph-ui.svg)](https://www.npmjs.com/package/neumorph-ui)
[![npm downloads](https://img.shields.io/npm/dm/neumorph-ui.svg)](https://www.npmjs.com/package/neumorph-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Repository](https://img.shields.io/badge/GitHub-iririn1998%2Fneumorph--ui-lightgrey.svg?logo=github)](https://github.com/iririn1998/neumorph-ui)

A neumorphism-inspired React UI component library built on top of [Mantine](https://mantine.dev/).  
Mantine をベースにしたニューモーフィズム（Neumorphism）スタイルの React UI コンポーネントライブラリ。

---

## Features / 特徴

- 🎨 **Neumorphic Aesthetic**: Soft shadows, extruded & pressed surface effects.
- ⚡ **Built on Mantine v7**: Full compatibility with Mantine's powerful design system and hooks.
- 🧩 **25+ Components**: Rich set of inputs, buttons, layout, navigation, overlays, and feedback components.
- 📦 **Tree Shakeable & Lightweight**: ESM and CJS exports with minimal runtime overhead.
- 🛠️ **TypeScript First**: First-class TypeScript support with comprehensive type definitions.

---

## Installation / インストール

Peer dependencies (`@mantine/core`, `@mantine/hooks`, `react`, `react-dom`) are required:

```bash
# pnpm
pnpm add neumorph-ui @mantine/core @mantine/hooks

# npm
npm install neumorph-ui @mantine/core @mantine/hooks

# yarn
yarn add neumorph-ui @mantine/core @mantine/hooks
```

---

## Quick Start / クイックスタート

Wrap your application with `MantineProvider` and pass `neumorphismTheme`. Don't forget to import both `@mantine/core/styles.css` and `neumorph-ui/styles.css`.

```tsx
import React from 'react';
import { MantineProvider } from '@mantine/core';
import {
  neumorphismTheme,
  NuButton,
  NuCard,
  NuTextInput,
  NuSwitch,
  NuBadge,
} from 'neumorph-ui';

// Styles
import '@mantine/core/styles.css';
import 'neumorph-ui/styles.css';

export default function App() {
  return (
    <MantineProvider theme={neumorphismTheme}>
      <div
        style={{
          padding: '2rem',
          backgroundColor: '#e0e5ec', // Soft neumorphic background
          minHeight: '100vh',
        }}
      >
        <NuCard style={{ maxWidth: 420, margin: '0 auto' }}>
          <h2>Neumorph UI Example</h2>
          <NuTextInput label="Email" placeholder="you@example.com" />
          <NuSwitch label="Enable Notifications" mt="sm" />
          <NuButton mt="md" fullWidth>
            Submit
          </NuButton>
        </NuCard>
      </div>
    </MantineProvider>
  );
}
```

---

## Components / 提供コンポーネント

| Category | Components |
|---|---|
| **Buttons** | `NuButton`, `NuActionIcon` |
| **Inputs** | `NuTextInput`, `NuPasswordInput`, `NuTextarea`, `NuSelect`, `NuMultiSelect`, `NuCheckbox`, `NuRadio`, `NuRadioGroup`, `NuSwitch`, `NuSlider` |
| **Layout** | `NuCard`, `NuCardSection`, `NuPaper`, `NuGroup`, `NuStack`, `NuDivider`, `NuAppShell` (`NuAppShellHeader`, `NuAppShellNavbar`, `NuAppShellMain`, `NuAppShellFooter`, `NuAppShellSection`) |
| **Navigation** | `NuTabs` (`NuTabsList`, `NuTabsTab`, `NuTabsPanel`), `NuSegmentedControl` |
| **Overlays** | `NuTooltip`, `NuPopover` (`NuPopoverTarget`, `NuPopoverDropdown`), `NuModal`, `NuDrawer` |
| **Data Display** | `NuBadge`, `NuAvatar` |
| **Feedback** | `NuAlert`, `NuNotification`, `NuProgress`, `NuLoader`, `NuSkeleton` |

---

## Theme & Customization / テーマとカスタマイズ

You can merge `neumorphismTheme` with your custom Mantine theme overrides:

```tsx
import { createTheme, mergeThemeOverrides } from '@mantine/core';
import { neumorphismTheme } from 'neumorph-ui';

const myCustomTheme = createTheme({
  primaryColor: 'blue',
  fontFamily: 'Inter, sans-serif',
});

const theme = mergeThemeOverrides(neumorphismTheme, myCustomTheme);
```

---

## Links / リンク

- [GitHub Repository](https://github.com/iririn1998/neumorph-ui)
- [npm package](https://www.npmjs.com/package/neumorph-ui)
- [Issues](https://github.com/iririn1998/neumorph-ui/issues)

---

## License

[MIT](./LICENSE) © [iririn](https://github.com/iririn1998)
