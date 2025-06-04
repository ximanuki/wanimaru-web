// ==================================================
// わにまる Webサイト microCMS API クライアント
// ==================================================

import type { 
  News, 
  NewsListResponse, 
  NewsQuery,
  Activity,
  Member,
  MicroCMSResponse 
} from '../types';
import { API_CONFIG } from './constants';
import { devLog } from './utils';

// --------------------------------------------------
// API クライアント設定
// --------------------------------------------------

const MICROCMS_API_KEY = import.meta.env.PUBLIC_MICROCMS_API_KEY;
const MICROCMS_SERVICE_DOMAIN = import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN;

if (!MICROCMS_API_KEY || !MICROCMS_SERVICE_DOMAIN) {
  if (import.meta.env.DEV) {
    console.warn('microCMS API credentials are not set. Using mock data for development.');
  }
}

const BASE_URL = MICROCMS_SERVICE_DOMAIN ? `https://${MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1` : '';

// --------------------------------------------------
// HTTP クライアント
// --------------------------------------------------

async function apiRequest<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
  // 本番環境での microCMS API 呼び出し
  if (MICROCMS_API_KEY && MICROCMS_SERVICE_DOMAIN) {
    try {
      const url = new URL(`${BASE_URL}${endpoint}`);
      
      // クエリパラメータを追加
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            url.searchParams.append(key, String(value));
          }
        });
      }

      const response = await fetch(url.toString(), {
        headers: {
          'X-MICROCMS-API-KEY': MICROCMS_API_KEY,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`microCMS API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      devLog(`microCMS API Request: ${endpoint}`, { params, response: data });
      
      return data;
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('microCMS API request failed:', error);
      }
      // エラー時はモックデータにフォールバック
      throw new Error(`Failed to fetch data from microCMS: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  // 開発環境での モックデータ返却
  return getMockData<T>(endpoint, params);
}

// --------------------------------------------------
// モックデータ
// --------------------------------------------------

function getMockData<T>(endpoint: string, params?: Record<string, any>): T {
  devLog(`Using mock data for endpoint: ${endpoint}`, params);

  switch (endpoint) {
    case '/news':
      return getMockNewsData(params) as T;
    case '/activities':
      return getMockActivitiesData() as T;
    case '/members':
      return getMockMembersData() as T;
    default:
      if (endpoint.startsWith('/news/')) {
        const slug = endpoint.split('/news/')[1];
        return getMockNewsItem(slug) as T;
      }
      throw new Error(`Unknown endpoint: ${endpoint}`);
  }
}

function getMockNewsData(params?: Record<string, any>): MicroCMSResponse<News> {
  const limit = params?.limit || 10;
  const offset = params?.offset || 0;
  const category = params?.category;

  const allNews: News[] = [
    {
      id: '1',
      title: '2024年度組合員募集を開始しました',
      slug: '2024-recruitment-start',
      category: 'recruit',
      content: '<p>2024年度の組合員募集を開始いたします。新しい働き方に挑戦したい方、地域に貢献したい方のご応募をお待ちしております。</p>',
      excerpt: '2024年度の組合員募集を開始いたします。新しい働き方に挑戦したい方、地域に貢献したい方のご応募をお待ちしております。',
      thumbnail: {
        url: '/images/news/recruitment-2024.jpg',
        width: 800,
        height: 600,
        alt: '2024年度組合員募集のお知らせ',
      },
      publishedAt: '2024-01-15T09:00:00.000Z',
      isImportant: true,
      tags: ['募集', '2024年度', '組合員'],
      createdAt: '2024-01-15T09:00:00.000Z',
      updatedAt: '2024-01-15T09:00:00.000Z',
    },
    {
      id: '2',
      title: 'マルチワーク体験セミナー開催のお知らせ',
      slug: 'multiwork-seminar-2024',
      category: 'event',
      content: '<p>マルチワークに興味のある方を対象としたセミナーを開催いたします。実際の体験談や具体的な働き方についてお話しします。</p>',
      excerpt: 'マルチワークに興味のある方を対象としたセミナーを開催いたします。',
      thumbnail: {
        url: '/images/news/seminar-2024.jpg',
        width: 800,
        height: 600,
        alt: 'マルチワーク体験セミナー',
      },
      publishedAt: '2024-01-10T14:00:00.000Z',
      isImportant: false,
      tags: ['セミナー', 'イベント', 'マルチワーク'],
      createdAt: '2024-01-10T14:00:00.000Z',
      updatedAt: '2024-01-10T14:00:00.000Z',
    },
    {
      id: '3',
      title: '地域企業との新規提携について',
      slug: 'new-partnership-announcement',
      category: 'announcement',
      content: '<p>この度、地域の複数企業と新たな提携関係を結びました。組合員の皆様により多様な働く機会を提供してまいります。</p>',
      excerpt: 'この度、地域の複数企業と新たな提携関係を結びました。',
      publishedAt: '2024-01-05T10:30:00.000Z',
      isImportant: false,
      tags: ['提携', '企業', 'お知らせ'],
      createdAt: '2024-01-05T10:30:00.000Z',
      updatedAt: '2024-01-05T10:30:00.000Z',
    },
    {
      id: '4',
      title: '2023年度活動報告書を公開しました',
      slug: '2023-annual-report',
      category: 'report',
      content: '<p>2023年度の活動報告書を公開いたします。今年度の実績や成果、来年度の計画についてまとめております。</p>',
      excerpt: '2023年度の活動報告書を公開いたします。',
      publishedAt: '2023-12-28T16:00:00.000Z',
      isImportant: false,
      tags: ['報告書', '2023年度', '実績'],
      createdAt: '2023-12-28T16:00:00.000Z',
      updatedAt: '2023-12-28T16:00:00.000Z',
    },
  ];

  // カテゴリーフィルタリング
  const filteredNews = category 
    ? allNews.filter(news => news.category === category)
    : allNews;

  // ページネーション
  const paginatedNews = filteredNews.slice(offset, offset + limit);

  return {
    contents: paginatedNews,
    totalCount: filteredNews.length,
    offset,
    limit,
  };
}

function getMockNewsItem(slug: string): News {
  const newsData = getMockNewsData();
  const item = newsData.contents.find(news => news.slug === slug);
  
  if (!item) {
    throw new Error(`News item not found: ${slug}`);
  }

  return item;
}

function getMockActivitiesData(): MicroCMSResponse<Activity> {
  const activities: Activity[] = [
    {
      id: '1',
      title: 'マルチワーク支援コンサルティング',
      description: '個人や企業のマルチワーク導入をサポートします。働き方の多様化や効率化を実現するためのコンサルティングサービスです。',
      category: 'consulting',
      image: {
        url: '/images/activities/consulting.jpg',
        width: 800,
        height: 600,
        alt: 'マルチワーク支援コンサルティング',
      },
      features: ['個別相談', '導入支援', 'フォローアップ'],
      targetAudience: ['個人事業主', '中小企業', 'フリーランス'],
      duration: '3ヶ月〜',
      isActive: true,
    },
    {
      id: '2',
      title: 'スキルアップ研修プログラム',
      description: 'マルチワークに必要なスキルを身につけるための研修プログラムです。',
      category: 'training',
      features: ['実践的研修', '認定制度', 'ネットワーキング'],
      targetAudience: ['組合員', '求職者', '学生'],
      duration: '1日〜1週間',
      isActive: true,
    },
  ];

  return {
    contents: activities,
    totalCount: activities.length,
    offset: 0,
    limit: activities.length,
  };
}

function getMockMembersData(): MicroCMSResponse<Member> {
  const members: Member[] = [
    {
      id: '1',
      name: '田中太郎',
      nameKana: 'たなかたろう',
      role: '代表理事',
      bio: 'マルチワークの普及に向けて日々活動しています。地域の皆様と共に新しい働き方を創造していきたいと思います。',
      avatar: {
        url: '/images/members/tanaka.jpg',
        width: 400,
        height: 400,
        alt: '田中太郎のプロフィール写真',
      },
      skills: ['経営戦略', 'プロジェクトマネジメント', '地域活性化'],
      joinedAt: '2021-04-01T00:00:00.000Z',
      isPublic: true,
    },
    {
      id: '2',
      name: '佐藤花子',
      nameKana: 'さとうはなこ',
      role: '事業企画担当',
      bio: 'マルチワーク事業の企画・運営を担当しています。メンバーの皆様が活躍できる場を提供していきます。',
      skills: ['事業企画', 'マーケティング', 'デザイン'],
      joinedAt: '2021-06-01T00:00:00.000Z',
      isPublic: true,
    },
  ];

  return {
    contents: members,
    totalCount: members.length,
    offset: 0,
    limit: members.length,
  };
}

// --------------------------------------------------
// ニュース API
// --------------------------------------------------

/**
 * ニュース一覧を取得する
 * @param query - 検索クエリ
 * @returns ニュース一覧
 */
export async function getNewsList(query: NewsQuery = {}): Promise<NewsListResponse> {
  const { limit = 10, offset = 0, category, q, orders } = query;
  
  const params: Record<string, any> = {
    limit,
    offset,
  };

  if (category) {
    // カテゴリーがIDの場合は直接使用、文字列の場合はカテゴリー検索
    if (category.includes('-')) {
      params.filters = `category[equals]${category}`;
    } else {
      // 旧形式のカテゴリー名での互換性
      params.filters = `category[equals]${category}`;
    }
  }
  if (q) params.q = q;
  if (orders) params.orders = orders;

  const response = await apiRequest<MicroCMSResponse<News>>('/news', params);
  
  return {
    contents: response.contents,
    totalCount: response.totalCount,
    offset: response.offset,
    limit: response.limit,
  };
}

/**
 * ニュース詳細を取得する
 * @param idOrSlug - ニュースIDまたはスラッグ
 * @returns ニュース詳細
 */
export async function getNewsDetail(idOrSlug: string): Promise<News | null> {
  try {
    // まずIDで取得を試みる
    const newsById = await apiRequest<News>(`/news/${idOrSlug}`);
    if (newsById) return newsById;
  } catch (error) {
    // IDで見つからない場合はスラッグで検索
    try {
      const newsList = await getNewsList({ q: idOrSlug, limit: 1 });
      if (newsList.contents.length > 0) {
        return newsList.contents[0];
      }
    } catch (searchError) {
      if (import.meta.env.DEV) {
        console.error(`Failed to fetch news detail: ${idOrSlug}`, searchError);
      }
    }
  }
  return null;
}

/**
 * 重要なニュースを取得する
 * @param limit - 取得件数
 * @returns 重要なニュース一覧
 */
export async function getImportantNews(limit: number = 5): Promise<News[]> {
  const params = {
    filters: 'isImportant[equals]true',
    limit,
    orders: '-publishedAt',
  };

  const response = await apiRequest<MicroCMSResponse<News>>('/news', params);
  return response.contents;
}

// --------------------------------------------------
// 活動 API
// --------------------------------------------------

/**
 * 活動一覧を取得する
 * @returns 活動一覧
 */
export async function getActivitiesList(): Promise<Activity[]> {
  const response = await apiRequest<MicroCMSResponse<Activity>>('/activities');
  return response.contents;
}

// --------------------------------------------------
// カテゴリー API
// --------------------------------------------------

/**
 * カテゴリー一覧を取得する
 * @returns カテゴリー一覧
 */
export async function getCategoriesList(): Promise<Category[]> {
  const response = await apiRequest<MicroCMSResponse<Category>>('/categories');
  return response.contents;
}

// --------------------------------------------------
// メンバー API
// --------------------------------------------------

/**
 * 公開メンバー一覧を取得する
 * @returns メンバー一覧
 */
export async function getPublicMembers(): Promise<Member[]> {
  const params = {
    filters: 'isPublic[equals]true',
    orders: 'joinedAt',
  };

  const response = await apiRequest<MicroCMSResponse<Member>>('/members', params);
  return response.contents;
}

// --------------------------------------------------
// ユーティリティ関数
// --------------------------------------------------

/**
 * microCMS の接続状況をチェックする
 * @returns 接続可能かどうか
 */
export async function checkMicroCMSConnection(): Promise<boolean> {
  if (!MICROCMS_API_KEY || !MICROCMS_SERVICE_DOMAIN) {
    return false;
  }

  try {
    await apiRequest('/news', { limit: 1 });
    return true;
  } catch {
    return false;
  }
}

/**
 * 開発環境でのデータリフレッシュ
 */
export function refreshMockData(): void {
  if (import.meta.env.DEV) {
    devLog('Mock data refreshed');
    // 実際の実装では、キャッシュクリアなどの処理を行う
  }
}