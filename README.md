# わにまる Webサイト

地域とつながる、未来をつくる。マルチワークで新しい働き方を提案する組織「わにまる」の公式ウェブサイトです。

## 🌟 概要

このプロジェクトは、Astro + React + TypeScript + Tailwind CSSで構築されたモダンなウェブサイトです。
レスポンシブデザイン、SEO最適化、パフォーマンス最適化を重視して開発されています。

## 🏗️ 技術スタック

- **フレームワーク**: Astro 5.x
- **UI ライブラリ**: React 18
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: GSAP
- **アイコン**: Lucide React
- **CMS**: microCMS (予定)
- **フォーム**: Formrun (予定)

## 🚀 プロジェクト構造

```text
wanimaru-web/
├── public/                 # 静的ファイル
├── src/
│   ├── components/         # コンポーネント
│   │   ├── common/        # 共通コンポーネント (Header, Footer, Button)
│   │   ├── sections/      # セクションコンポーネント (Hero, Features)
│   │   └── forms/         # フォームコンポーネント
│   ├── layouts/           # レイアウトコンポーネント
│   │   └── BaseLayout.astro
│   ├── pages/             # ページファイル
│   │   └── index.astro
│   ├── styles/            # スタイルファイル
│   │   └── global.css
│   └── lib/               # ユーティリティ・設定
├── .env.example           # 環境変数テンプレート
├── astro.config.mjs       # Astro設定
├── tailwind.config.mjs    # Tailwind設定
└── tsconfig.json          # TypeScript設定
```

## 🎨 デザインシステム

### カラーパレット
- **プライマリ**: #2A6F4E (緑)
- **セカンダリ**: #F1E8D9 (ベージュ)
- **アクセント**: #FFB400 (オレンジ)

### フォント
- **メイン**: Noto Sans JP

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
