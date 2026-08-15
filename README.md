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

## クイックスタート

```tsx
import React from 'react';
import { MantineProvider } from '@mantine/core';
import { neumorphismTheme, NuButton, NuCard, NuTextInput } from 'neumorph-ui';
import '@mantine/core/styles.css';
import 'neumorph-ui/styles.css';

export default function App() {
  return (
    <MantineProvider theme={neumorphismTheme}>
      <div style={{ padding: '2rem', backgroundColor: '#e0e5ec', minHeight: '100vh' }}>
        <NuCard>
          <h2>Hello, Neumorph UI</h2>
          <NuTextInput label="Username" placeholder="Enter your username" />
          <NuButton mt="md">Submit</NuButton>
        </NuCard>
      </div>
    </MantineProvider>
  );
}
```

---

## 開発

```bash
# 依存関係のインストール
pnpm install

# Storybook の起動（カタログプレビュー）
pnpm dev

# パッケージのビルド
pnpm build

# テストの実行
pnpm test

# 型チェック
pnpm --filter neumorph-ui typecheck
```

---

## パッケージ構成

| パッケージ | 説明 |
|---|---|
| [`packages/core`](./packages/core) | `neumorph-ui` ライブラリ本体 |
| [`apps/storybook`](./apps/storybook) | Storybook によるコンポーネントカタログ |
| [`packages/config`](./packages/config) | 共有設定（Storybook, Vitest, Oxlint 等） |

---

## リリースフロー（GitHub Actions + Changesets）

本リポジトリは **Changesets** と **GitHub Actions** により自動化されています。

### 1. 変更内容の記録（開発時）
機能追加やバグ修正を行ったら、以下のコマンドで Changeset を作成してコミットに含めます。

```bash
pnpm changeset
```
対話式プロンプトで対象パッケージ（`neumorph-ui`）、バージョンアップ種別（major / minor / patch）、サマリーを入力します。

### 2. PR の作成とマージ
作成された `.changeset/*.md` を含めて PR を作成し、`main` ブランチにマージします。

### 3. 自動リリース
1. `main` に Changeset がマージされると、GitHub Actions が自動で **「chore: version packages」** というリリース用 PR を作成します。
2. そのリリース PR を `main` にマージすると、自動で `pnpm release`（ビルド ＆ npm publish）が実行され、npm に新バージョンが公開されます。

---

## ライセンス

[MIT](./packages/core/LICENSE)
