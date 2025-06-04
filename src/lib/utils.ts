// ==================================================
// わにまる Webサイト ユーティリティ関数
// ==================================================

import type { DateFormat } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --------------------------------------------------
// shadcn/ui用ユーティリティ
// --------------------------------------------------

/**
 * クラス名を結合してTailwind CSSの競合を解決する
 * @param inputs - クラス名の配列
 * @returns 結合されたクラス名
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --------------------------------------------------
// 日付フォーマット関数
// --------------------------------------------------

/**
 * 日付文字列をフォーマットする
 * @param dateString - ISO 8601 形式の日付文字列
 * @param format - フォーマット形式
 * @returns フォーマットされた日付文字列
 */
export function formatDate(dateString: string, format: DateFormat = 'YYYY/MM/DD'): string {
  const date = new Date(dateString);
  
  if (isNaN(date.getTime())) {
    return '無効な日付';
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  switch (format) {
    case 'YYYY-MM-DD':
      return `${year}-${month}-${day}`;
    case 'YYYY/MM/DD':
      return `${year}/${month}/${day}`;
    case 'MM/DD/YYYY':
      return `${month}/${day}/${year}`;
    case 'relative':
      return formatRelativeDate(date);
    default:
      return `${year}/${month}/${day}`;
  }
}

/**
 * 相対的な日付を返す（例：「3日前」「1週間前」）
 * @param date - Date オブジェクト
 * @returns 相対的な日付文字列
 */
export function formatRelativeDate(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffDays === 0) return '今日';
  if (diffDays === 1) return '昨日';
  if (diffDays < 7) return `${diffDays}日前`;
  if (diffWeeks === 1) return '1週間前';
  if (diffWeeks < 4) return `${diffWeeks}週間前`;
  if (diffMonths === 1) return '1ヶ月前';
  if (diffMonths < 12) return `${diffMonths}ヶ月前`;
  if (diffYears === 1) return '1年前';
  return `${diffYears}年前`;
}

// --------------------------------------------------
// 文字列処理関数
// --------------------------------------------------

/**
 * 文字列を指定された長さで切り詰める
 * @param text - 元の文字列
 * @param maxLength - 最大長
 * @param suffix - 切り詰め時の接尾辞
 * @returns 切り詰められた文字列
 */
export function truncateText(text: string, maxLength: number, suffix: string = '...'): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * HTMLタグを除去する
 * @param html - HTML文字列
 * @returns プレーンテキスト
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

/**
 * 文字列をスラッグ形式に変換する
 * @param text - 元の文字列
 * @returns スラッグ文字列
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s]+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * カタカナをひらがなに変換する
 * @param katakana - カタカナ文字列
 * @returns ひらがな文字列
 */
export function katakanaToHiragana(katakana: string): string {
  return katakana.replace(/[\u30a1-\u30f6]/g, (match) => {
    const char = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(char);
  });
}

/**
 * ひらがなをカタカナに変換する
 * @param hiragana - ひらがな文字列
 * @returns カタカナ文字列
 */
export function hiraganaToKatakana(hiragana: string): string {
  return hiragana.replace(/[\u3041-\u3096]/g, (match) => {
    const char = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(char);
  });
}

// --------------------------------------------------
// バリデーション関数
// --------------------------------------------------

/**
 * メールアドレスの形式をチェックする
 * @param email - メールアドレス
 * @returns 有効かどうか
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * 電話番号の形式をチェックする（日本の形式）
 * @param phone - 電話番号
 * @returns 有効かどうか
 */
export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^(\+81|0)[1-9]\d{8,9}$/;
  const cleanPhone = phone.replace(/[-\s()]/g, '');
  return phoneRegex.test(cleanPhone);
}

/**
 * 郵便番号の形式をチェックする（日本の形式）
 * @param postalCode - 郵便番号
 * @returns 有効かどうか
 */
export function isValidPostalCode(postalCode: string): boolean {
  const postalRegex = /^\d{3}-\d{4}$/;
  return postalRegex.test(postalCode);
}

/**
 * URLの形式をチェックする
 * @param url - URL
 * @returns 有効かどうか
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// --------------------------------------------------
// 数値・計算関数
// --------------------------------------------------

/**
 * 数値にカンマ区切りを追加する
 * @param num - 数値
 * @returns カンマ区切りの文字列
 */
export function formatNumber(num: number): string {
  return num.toLocaleString('ja-JP');
}

/**
 * パーセンテージを計算する
 * @param value - 値
 * @param total - 総計
 * @param decimals - 小数点以下の桁数
 * @returns パーセンテージ
 */
export function calculatePercentage(value: number, total: number, decimals: number = 1): number {
  if (total === 0) return 0;
  return Math.round((value / total) * 100 * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

/**
 * 範囲内の値に制限する
 * @param value - 値
 * @param min - 最小値
 * @param max - 最大値
 * @returns 制限された値
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

// --------------------------------------------------
// 配列操作関数
// --------------------------------------------------

/**
 * 配列をシャッフルする
 * @param array - 配列
 * @returns シャッフルされた新しい配列
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * 配列から重複を除去する
 * @param array - 配列
 * @returns 重複が除去された新しい配列
 */
export function uniqueArray<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

/**
 * 配列をチャンクに分割する
 * @param array - 配列
 * @param chunkSize - チャンクサイズ
 * @returns チャンクの配列
 */
export function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

// --------------------------------------------------
// オブジェクト操作関数
// --------------------------------------------------

/**
 * オブジェクトの深いコピーを作成する
 * @param obj - オブジェクト
 * @returns コピーされたオブジェクト
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T;
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as unknown as T;
  if (typeof obj === 'object') {
    const copy = {} as { [key: string]: any };
    Object.keys(obj).forEach(key => {
      copy[key] = deepClone((obj as { [key: string]: any })[key]);
    });
    return copy as T;
  }
  return obj;
}

/**
 * オブジェクトから空の値を除去する
 * @param obj - オブジェクト
 * @returns 空の値が除去されたオブジェクト
 */
export function removeEmptyValues<T extends Record<string, any>>(obj: T): Partial<T> {
  const result: Partial<T> = {};
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (value !== null && value !== undefined && value !== '' && 
        !(Array.isArray(value) && value.length === 0)) {
      result[key as keyof T] = value;
    }
  });
  return result;
}

// --------------------------------------------------
// 色・CSS関数
// --------------------------------------------------

/**
 * HEXカラーからRGBに変換する
 * @param hex - HEXカラー（#付き）
 * @returns RGB値のオブジェクト
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
}

/**
 * RGBからHEXカラーに変換する
 * @param r - 赤
 * @param g - 緑
 * @param b - 青
 * @returns HEXカラー
 */
export function rgbToHex(r: number, g: number, b: number): string {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

// --------------------------------------------------
// ストレージ関数
// --------------------------------------------------

/**
 * ローカルストレージに値を保存する
 * @param key - キー
 * @param value - 値
 */
export function setLocalStorage(key: string, value: any): void {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
    }
  }
}

/**
 * ローカルストレージから値を取得する
 * @param key - キー
 * @param defaultValue - デフォルト値
 * @returns 取得された値
 */
export function getLocalStorage<T>(key: string, defaultValue: T): T {
  if (typeof window !== 'undefined') {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn('Failed to read from localStorage:', error);
      return defaultValue;
    }
  }
  return defaultValue;
}

/**
 * ローカルストレージから値を削除する
 * @param key - キー
 */
export function removeLocalStorage(key: string): void {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn('Failed to remove from localStorage:', error);
    }
  }
}

// --------------------------------------------------
// デバッグ・開発用関数
// --------------------------------------------------

/**
 * 開発環境でのみコンソールログを出力する
 * @param message - メッセージ
 * @param data - データ
 */
export function devLog(message: string, data?: any): void {
  if (process.env.NODE_ENV === 'development') {
    if (data) {
      console.log(`[Dev] ${message}`, data);
    } else {
      console.log(`[Dev] ${message}`);
    }
  }
}

/**
 * パフォーマンス測定用のタイマー
 */
export class PerformanceTimer {
  private startTime: number = 0;
  
  start(): void {
    this.startTime = performance.now();
  }
  
  end(label: string = 'Timer'): number {
    const endTime = performance.now();
    const duration = endTime - this.startTime;
    devLog(`${label}: ${duration.toFixed(2)}ms`);
    return duration;
  }
}