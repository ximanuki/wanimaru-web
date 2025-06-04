import type { APIRoute } from 'astro';
import { getCategoriesList } from '../../lib/microcms';

export const GET: APIRoute = async () => {
  try {
    const categories = await getCategoriesList();
    
    return new Response(JSON.stringify({ categories }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch categories' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};