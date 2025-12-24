import { db } from '@/lib/database';
import { NextResponse } from 'next/server';
import { handleError } from '../response-helper';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || `${POSTS_LIMIT}`);
    const categoryId = parseInt(searchParams.get('categoryId'));
    const search = searchParams.get('search');
    const featured = searchParams.get('featured') === 'true';

    let result;
    if (featured) {
      result = await db.getFeaturedPosts(limit);
    } else {
      result = await db.getPosts({ page, limit, categoryId, search });
    }

    return NextResponse.json({
      success: true,
      ...result,
    });
  } catch (error) {
    return handleError(error.message);
  }
}
