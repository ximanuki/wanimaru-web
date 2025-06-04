# CLAUDE.md - 川西町マルチワーク事業協同組合（わにまる）Webサイト

## プロジェクト概要

川西町マルチワーク事業協同組合「わにまる」の公式Webサイト。地域での新しい働き方「マルチワーク」を推進し、組合員募集と地域認知向上を目的としたコーポレートサイト。

## 主要目標

- 組合員応募: 60件/6ヶ月
- 求人CVR: 5%
- 月間PV: 3,000
- 企業提携: 4件/年

## ターゲット

- 地域求職者（複数の仕事を掛け持ち希望）
- 地元住民（地域活性化に関心）
- 行政担当者（雇用政策担当）
- 地元企業（人材不足解消）
- 若者層（Uターン検討中）

## 技術スタック

```yaml
frontend:
  framework: Astro v4.x
  language: TypeScript
  styling: Tailwind CSS v3.x
  animation: GSAP v3.x
  icons: Lucide Icons

cms:
  service: microCMS
  plan: Hobby（無料）

hosting:
  platform: Vercel
  domain: wanimaru.jp（仮）

forms:
  service: Formrun
  plan: FREE

analytics:
  service: Google Analytics 4
```

## ディレクトリ構造

```
wanimaru-web/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Button.tsx
│   │   │   └── Navigation.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── Features.astro
│   │   │   ├── NewsSection.astro
│   │   │   └── CTA.astro
│   │   └── forms/
│   │       ├── ApplicationForm.tsx
│   │       └── ContactForm.tsx
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro          # トップページ
│   │   ├── about.astro          # 組合について
│   │   ├── activities.astro    # 活動紹介
│   │   ├── join.astro           # 参加・応募
│   │   ├── contact.astro        # お問い合わせ
│   │   ├── privacy.astro        # プライバシーポリシー
│   │   └── news/
│   │       ├── index.astro      # ニュース一覧
│   │       └── [slug].astro     # ニュース詳細
│   ├── lib/
│   │   ├── microcms.ts          # microCMS API
│   │   ├── constants.ts         # 定数定義
│   │   └── utils.ts             # ユーティリティ
│   ├── types/
│   │   └── index.ts             # 型定義
│   └── styles/
│       └── global.css           # グローバルスタイル
├── public/
│   ├── images/
│   ├── favicon.ico
│   └── robots.txt
├── .env.example
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## デザインシステム

### カラーパレット

- **Primary**: #2A6F4E（深緑） - 信頼感・安定感
- **Secondary**: #F1E8D9（ベージュ） - 親しみやすさ
- **Accent**: #FFB400（オレンジ） - 活力・挑戦

### タイポグラフィ

- **フォント**: Noto Sans JP
- **基本サイズ**: 16px以上（アクセシビリティ配慮）

### トーン＆マナー

- 親しみやすさ × 挑戦的
- 地域密着 × 革新性
- 温かみ × プロフェッショナル

## 主要機能

### 1. CMSニュース機能

- microCMS連携
- カテゴリー: お知らせ/イベント/採用情報/活動報告
- ページネーション（10件/ページ）

### 2. 応募・問い合わせフォーム

- Formrun連携
- バリデーション実装
- 自動返信メール

### 3. SNS連携

- Instagram最新投稿表示
- LINE友だち追加ボタン

## データモデル

### microCMS - News

```typescript
interface News {
  id: string;
  title: string;
  slug: string;
  category: 'announcement' | 'event' | 'recruit' | 'report';
  content: string;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
  publishedAt: string;
  isImportant: boolean;
}
```

### Formrun - 応募フォーム

```typescript
interface ApplicationForm {
  name: string;
  email: string;
  phone: string;
  age: number;
  address: string;
  experience: string;
  motivation: string;
  availableDays: string[];
}
```

## 環境変数

```env
# microCMS
PUBLIC_MICROCMS_API_KEY=
PUBLIC_MICROCMS_SERVICE_DOMAIN=

# Formrun
PUBLIC_FORMRUN_FORM_ID_APPLICATION=
PUBLIC_FORMRUN_FORM_ID_CONTACT=

# Analytics
PUBLIC_GA_MEASUREMENT_ID=

# SNS
PUBLIC_INSTAGRAM_ACCESS_TOKEN=
PUBLIC_LINE_OFFICIAL_ID=
```

## パフォーマンス目標

- **Lighthouse Score**: 90+
- **Core Web Vitals**:
  - LCP: < 2.5s
  - FID: < 100ms
  - CLS: < 0.1

## SEO要件

- 各ページ個別のメタタグ
- 構造化データ（Organization, BreadcrumbList）
- sitemap.xml自動生成
- 適切なheading構造

## アクセシビリティ

- WCAG 2.1 レベルAA準拠
- キーボードナビゲーション対応
- スクリーンリーダー対応（ARIA属性）
- カラーコントラスト比 4.5:1以上

## 実装上の注意事項

### コンテンツの仮実装

現時点で以下のコンテンツは仮実装とする：

- 代表挨拶文
- 具体的な活動事例（3件程度のサンプル）
- メンバーインタビュー（3名分のダミー）
- 募集要項の詳細（給与等）

### ヒーローコピー候補

- "地域とつながる、未来をつくる"
- "ひとつじゃない、いくつもの「はたらく」を"
- "わたしらしく、まちとともに"

## 将来的な拡張予定（Phase 2）

- 英語版対応
- 会員機能（マイページ）
- メールマガジン配信
- チャットボット

## 開発フロー

1. 環境構築 → 基本設定・パッケージインストール
2. 基盤実装 → レイアウト・共通コンポーネント
3. ページ作成 → 各ページの静的実装
4. CMS連携 → microCMS API実装
5. フォーム実装 → Formrun埋め込み
6. 最適化 → パフォーマンス・SEO対策
7. テスト → E2E・レスポンシブ確認

## コーディング規約

- **命名規則**:
  - コンポーネント: PascalCase
  - 関数・変数: camelCase
  - CSS class: kebab-case
- **TypeScript**: strict mode有効
- **Prettier**: デフォルト設定
- **コミット**: Conventional Commits形式

## テスト要件

- ユニットテスト: Vitest
- E2Eテスト: Playwright
- 主要ブラウザ対応確認
- モバイル実機テスト

## リリース情報

- 原稿・素材締切: 2025/06/20
- 公開予定日: 2025/07/15
- 初年度予算: 20万円

---

このプロジェクトは地域活性化と新しい働き方の推進を目的としています。
実装時は、地域の温かみと革新性のバランスを大切にしてください。