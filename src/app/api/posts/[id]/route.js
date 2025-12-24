import { db } from '@/lib/database';
import { NextResponse } from 'next/server';
import { handleError } from '../../response-helper';

export async function GET(_, { params }) {
  try {
    const { id } = await params;
    const postId = parseInt(id);
    const post = await db.getPostById(postId);

    if (!post) {
      return handleError('Post not found', 404);
    }

    return NextResponse.json({ success: true, data: post });
  } catch (error) {
    handleError(error.message);
  }
}
