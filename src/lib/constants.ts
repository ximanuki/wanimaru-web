// ==================================================
// わにまる Webサイト 定数定義
// ==================================================

import type { SiteConfig, SocialLinks, ContactInfo, Statistics } from '../types';

// --------------------------------------------------
// サイト基本情報
// --------------------------------------------------

export const SITE_CONFIG: SiteConfig = {
  name: 'わにまる',
  description: '地域とつながる、未来をつくる。マルチワークで新しい働き方を提案する組織です。',
  url: 'https://wanimaru.jp',
  logo: '/images/assets/wanimaru.png',
  locale: 'ja',
  defaultMetaImage: '/images/og/wanimaru-og.jpg',
};

export const SITE_TITLE = 'わにまる | 川西町マルチワーク事業協同組合';

export const SITE_DESCRIPTION = '川西町マルチワーク事業協同組合「わにまる」は、地域での新しい働き方「マルチワーク」を推進し、組合員募集と地域認知向上を目的とした組織です。';

// --------------------------------------------------
// アセット情報
// --------------------------------------------------

export const ASSETS = {
  LOGO: '/images/assets/wanimaru.png',
  LOGO_3D: '/models/wanimaru.glb',
  FAVICON: '/images/assets/wanimaru.png',
  OG_IMAGE: '/images/og/wanimaru-og.jpg',
} as const;

// --------------------------------------------------
// ヒーローコピー
// --------------------------------------------------

export const HERO_COPIES = [
  '地域とつながる、未来をつくる',
  'ひとつじゃない、いくつもの「はたらく」を',
  'わたしらしく、まちとともに',
] as const;

export const MAIN_HERO_COPY = HERO_COPIES[0];

// --------------------------------------------------
// ナビゲーション
// --------------------------------------------------

export const NAVIGATION_ITEMS = [
  { label: 'ホーム', href: '/', description: 'トップページ' },
  { label: 'わにまるとは', href: '/about', description: '組合について' },
  { label: '活動内容', href: '/activities', description: '活動紹介' },
  { label: 'ニュース', href: '/news', description: 'お知らせ・ニュース' },
  { label: '参加する', href: '/join', description: '参加・応募' },
  { label: 'お問い合わせ', href: '/contact', description: 'お問い合わせ' },
] as const;

// --------------------------------------------------
// ソーシャルメディア
// --------------------------------------------------

export const SOCIAL_LINKS: SocialLinks = {
  twitter: 'https://twitter.com/wanimaru_kawanishi',
  instagram: 'https://instagram.com/wanimaru_kawanishi',
  facebook: 'https://facebook.com/wanimaru.kawanishi',
  line: 'https://line.me/ti/p/@wanimaru_kawanishi',
};

// --------------------------------------------------
// 連絡先情報
// --------------------------------------------------

export const CONTACT_INFO: ContactInfo = {
  email: 'info@wanimaru.jp',
  phone: '0238-42-2111',
  address: {
    postal: '999-0121',
    prefecture: '山形県',
    city: '川西町',
    street: '上小松',
  },
  businessHours: '平日 9:00-18:00',
};

// --------------------------------------------------
// 統計・実績数字
// --------------------------------------------------

export const STATISTICS: Statistics = {
  members: 100, // 参加メンバー数
  projects: 50, // プロジェクト実績
  partnerships: 10, // 協力企業・団体数
  yearsOfOperation: 3, // 運営年数 (仮)
};

// --------------------------------------------------
// ニュースカテゴリー（レガシー対応）
// --------------------------------------------------

export const NEWS_CATEGORIES = {
  announcement: {
    label: 'お知らせ',
    color: 'bg-blue-100 text-blue-800',
    description: '重要な告知やお知らせ',
  },
  event: {
    label: 'イベント',
    color: 'bg-green-100 text-green-800',
    description: 'イベント・セミナー情報',
  },
  recruit: {
    label: '採用情報',
    color: 'bg-orange-100 text-orange-800',
    description: '組合員募集・求人情報',
  },
  report: {
    label: '活動報告',
    color: 'bg-purple-100 text-purple-800',
    description: '活動実績・事業報告',
  },
} as const;

// カテゴリーカラーのマッピング（microCMSカテゴリー用）
export const CATEGORY_COLORS: Record<string, string> = {
  '更新情報': 'bg-blue-100 text-blue-800',
  'テクノロジー': 'bg-purple-100 text-purple-800',
  'チュートリアル': 'bg-green-100 text-green-800',
  'お知らせ': 'bg-blue-100 text-blue-800',
  'イベント': 'bg-green-100 text-green-800',
  '採用情報': 'bg-orange-100 text-orange-800',
  '活動報告': 'bg-purple-100 text-purple-800',
};

// --------------------------------------------------
// フォーム設定
// --------------------------------------------------

export const FORM_CONFIG = {
  APPLICATION: {
    maxFileSize: 5 * 1024 * 1024, // 5MB
    allowedFileTypes: ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png'],
    requiredFields: [
      'name',
      'nameKana',
      'email',
      'phone',
      'age',
      'address',
      'motivation',
      'agreeToTerms',
      'agreeToPrivacy',
    ],
  },
  CONTACT: {
    maxMessageLength: 2000,
    requiredFields: ['name', 'email', 'subject', 'message', 'agreeToPrivacy'],
  },
} as const;

// --------------------------------------------------
// ページネーション設定
// --------------------------------------------------

export const PAGINATION = {
  NEWS_PER_PAGE: 10,
  ACTIVITIES_PER_PAGE: 6,
  MEMBERS_PER_PAGE: 12,
} as const;

// --------------------------------------------------
// API設定
// --------------------------------------------------

export const API_CONFIG = {
  MICROCMS: {
    BASE_URL: 'https://wanimaru.microcms.io/api/v1',
    ENDPOINTS: {
      NEWS: '/news',
      ACTIVITIES: '/activities',
      MEMBERS: '/members',
    },
  },
  FORMRUN: {
    APPLICATION_FORM_ID: process.env.PUBLIC_FORMRUN_FORM_ID_APPLICATION,
    CONTACT_FORM_ID: process.env.PUBLIC_FORMRUN_FORM_ID_CONTACT,
  },
} as const;

// --------------------------------------------------
// SEO設定
// --------------------------------------------------

export const SEO_CONFIG = {
  DEFAULT_KEYWORDS: [
    'わにまる',
    'マルチワーク',
    '川西町',
    '山形県',
    '地域活性化',
    '働き方改革',
    '副業',
    '複業',
    'コミュニティ',
    '地域貢献',
  ],
  TWITTER_SITE: '@wanimaru_kawanishi',
  FB_APP_ID: '',
} as const;

// --------------------------------------------------
// パフォーマンス設定
// --------------------------------------------------

export const PERFORMANCE_CONFIG = {
  IMAGE_QUALITY: 80,
  IMAGE_SIZES: {
    thumbnail: { width: 400, height: 300 },
    medium: { width: 800, height: 600 },
    large: { width: 1200, height: 900 },
  },
  CACHE_DURATION: {
    STATIC_ASSETS: '1 year',
    API_RESPONSES: '1 hour',
    NEWS_FEED: '30 minutes',
  },
} as const;

// --------------------------------------------------
// アニメーション設定
// --------------------------------------------------

export const ANIMATION_CONFIG = {
  DURATION: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  EASING: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
} as const;

// --------------------------------------------------
// ブレークポイント（Tailwindと同期）
// --------------------------------------------------

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// --------------------------------------------------
// 地域・都道府県
// --------------------------------------------------

export const PREFECTURES = [
  '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
  '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
  '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県',
  '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県',
  '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県',
  '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県',
  '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県',
] as const;

// --------------------------------------------------
// エラーメッセージ
// --------------------------------------------------

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'ネットワークエラーが発生しました。しばらく時間をおいて再度お試しください。',
  SERVER_ERROR: 'サーバーエラーが発生しました。管理者にお問い合わせください。',
  VALIDATION_ERROR: '入力内容に誤りがあります。確認して再度お試しください。',
  NOT_FOUND: 'お探しのページが見つかりませんでした。',
  ACCESS_DENIED: 'アクセスが拒否されました。',
  FORM_SUBMISSION_ERROR: 'フォームの送信に失敗しました。再度お試しください。',
} as const;

// --------------------------------------------------
// 成功メッセージ
// --------------------------------------------------

export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: 'フォームが正常に送信されました。ありがとうございます。',
  EMAIL_SENT: 'メールが送信されました。',
  DATA_SAVED: 'データが保存されました。',
  OPERATION_COMPLETED: '操作が完了しました。',
} as const;