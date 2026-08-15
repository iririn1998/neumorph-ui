# neumorph-ui

[![npm version](https://img.shields.io/npm/v/neumorph-ui.svg)](https://www.npmjs.com/package/neumorph-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Mantine をベースにしたニューモーフィズム（Neumorphism）スタイルの React UI コンポーネントライブラリ。

---

## インストール

```bash
# pnpm
pnpm add neumorph-ui @mantine/core @mantine/hooks

# npm
npm install neumorph-ui @mantine/core @mantine/hooks

# yarn
yarn add neumorph-ui @mantine/core @mantine/hooks
```

---

## 使い方

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
import '@mantine/core/styles.css';
import 'neumorph-ui/styles.css';

export default function App() {
  return (
    <MantineProvider theme={neumorphismTheme}>
      <div style={{ padding: '2rem', backgroundColor: '#e0e5ec', minHeight: '100vh' }}>
        <NuCard>
          <h2>Neumorph UI Example</h2>
          <NuTextInput label="Email" placeholder="you@example.com" />
          <NuSwitch label="Enable Notifications" mt="sm" />
          <NuButton mt="md">Submit</NuButton>
        </NuCard>
      </div>
    </MantineProvider>
  );
}
```

---

## 主なコンポーネント

- **Buttons**: `NuButton`, `NuActionIcon`
- **Inputs**: `NuTextInput`, `NuPasswordInput`, `NuTextarea`, `NuSelect`, `NuMultiSelect`, `NuCheckbox`, `NuRadio`, `NuRadioGroup`, `NuSwitch`, `NuSlider`
- **Layout**: `NuCard`, `NuCardSection`, `NuPaper`, `NuGroup`, `NuStack`, `NuDivider`, `NuAppShell`
- **Navigation**: `NuTabs`, `NuSegmentedControl`
- **Overlays**: `NuTooltip`, `NuPopover`, `NuModal`, `NuDrawer`
- **Data Display**: `NuBadge`, `NuAvatar`
- **Feedback**: `NuAlert`, `NuNotification`, `NuProgress`, `NuLoader`, `NuSkeleton`

---

## ライセンス

[MIT](https://opensource.org/licenses/MIT)
