// ==================================================
// わにまる Webサイト 型定義
// ==================================================

// --------------------------------------------------
// 共通型定義
// --------------------------------------------------

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface MetaData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  noindex?: boolean;
}

export interface ImageAsset {
  url: string;
  width: number;
  height: number;
  alt?: string;
}

// --------------------------------------------------
// ニュース関連型定義 (microCMS)
// --------------------------------------------------

export type NewsCategory = 'announcement' | 'event' | 'recruit' | 'report';

export interface MicroCMSImage {
  url: string;
  width?: number;
  height?: number;
}

export interface Category {
  id: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
}

export interface News {
  id: string;
  title: string;
  slug?: string;
  category?: Category | NewsCategory;
  content: string;
  excerpt?: string;
  thumbnail?: MicroCMSImage;
  publishedAt: string;
  isImportant?: boolean;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
  revisedAt?: string;
}

export interface NewsListResponse {
  contents: News[];
  totalCount: number;
  offset: number;
  limit: number;
}

export interface NewsQuery {
  limit?: number;
  offset?: number;
  category?: NewsCategory;
  q?: string; // 検索クエリ
  orders?: string;
}

// --------------------------------------------------
// フォーム関連型定義
// --------------------------------------------------

export interface ApplicationForm {
  name: string;
  nameKana: string;
  email: string;
  phone: string;
  age: number;
  gender?: 'male' | 'female' | 'other' | 'not_specified';
  address: string;
  prefecture: string;
  city: string;
  experience: string;
  motivation: string;
  availableDays: string[];
  availableHours: string;
  hasDriversLicense: boolean;
  hasVehicle: boolean;
  specialSkills?: string;
  references?: string;
  agreeToTerms: boolean;
  agreeToPrivacy: boolean;
}

export interface ContactForm {
  name: string;
  nameKana: string;
  email: string;
  phone?: string;
  organization?: string;
  inquiryType: 'general' | 'partnership' | 'media' | 'recruit' | 'other';
  subject: string;
  message: string;
  agreeToPrivacy: boolean;
}

export interface FormValidationError {
  field: string;
  message: string;
}

export interface FormResponse {
  success: boolean;
  message: string;
  errors?: FormValidationError[];
}

// --------------------------------------------------
// 活動・サービス関連型定義
// --------------------------------------------------

export interface Activity {
  id: string;
  title: string;
  description: string;
  category: 'consulting' | 'training' | 'event' | 'support';
  image?: ImageAsset;
  features: string[];
  targetAudience: string[];
  duration?: string;
  isActive: boolean;
}

export interface Member {
  id: string;
  name: string;
  nameKana: string;
  role: string;
  bio: string;
  avatar?: ImageAsset;
  skills: string[];
  joinedAt: string;
  isPublic: boolean;
}

export interface Partnership {
  id: string;
  companyName: string;
  description: string;
  logo?: ImageAsset;
  website?: string;
  partnershipType: 'corporate' | 'nonprofit' | 'government' | 'educational';
  startedAt: string;
  isActive: boolean;
}

// --------------------------------------------------
// UI コンポーネント関連型定義
// --------------------------------------------------

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  href?: string;
  target?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  isVisible: boolean;
  onClose?: () => void;
  autoClose?: boolean;
  duration?: number;
}

// --------------------------------------------------
// API レスポンス関連型定義
// --------------------------------------------------

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
  meta?: {
    pagination?: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

export interface MicroCMSResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}

// --------------------------------------------------
// 設定・環境変数関連型定義
// --------------------------------------------------

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  logo: string;
  locale: string;
  defaultMetaImage: string;
}

export interface SocialLinks {
  twitter?: string;
  instagram?: string;
  facebook?: string;
  line?: string;
  youtube?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  address: {
    postal: string;
    prefecture: string;
    city: string;
    street: string;
  };
  businessHours: string;
}

// --------------------------------------------------
// 統計・実績関連型定義
// --------------------------------------------------

export interface Statistics {
  members: number;
  projects: number;
  partnerships: number;
  yearsOfOperation: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'award' | 'milestone' | 'media' | 'partnership';
  image?: ImageAsset;
  url?: string;
}

// --------------------------------------------------
// ユーティリティ型定義
// --------------------------------------------------

export type Status = 'idle' | 'loading' | 'success' | 'error';

export type Theme = 'light' | 'dark';

export type Locale = 'ja' | 'en';

export type DateFormat = 'YYYY-MM-DD' | 'YYYY/MM/DD' | 'MM/DD/YYYY' | 'relative';

// --------------------------------------------------
// 条件付き型定義
// --------------------------------------------------

export type RequiredField<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type OptionalField<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type WithTimestamp<T> = T & {
  createdAt: string;
  updatedAt: string;
};

// --------------------------------------------------
// イベント関連型定義
// --------------------------------------------------

export interface CustomEvent {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location?: string;
  maxParticipants?: number;
  currentParticipants: number;
  registrationDeadline?: string;
  isOnline: boolean;
  tags: string[];
  organizer: string;
  status: 'draft' | 'published' | 'cancelled' | 'completed';
}