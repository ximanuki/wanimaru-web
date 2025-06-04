import type { APIRoute } from 'astro';
import { getNewsList } from '../../lib/microcms';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const category = url.searchParams.get('category');
  const limit = parseInt(url.searchParams.get('limit') || '10');
  const offset = parseInt(url.searchParams.get('offset') || '0');
  
  try {
    const newsData = await getNewsList({
      limit,
      offset,
      category: category || undefined,
    });
    
    return new Response(JSON.stringify(newsData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch news' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};