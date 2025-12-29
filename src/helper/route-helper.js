import { NextResponse } from 'next/server';

export const handleError = (error) => {
  let status = 500;

  switch (error.name) {
    case 'NotFoundError':
      status = 404;
      break;
    case 'ValidationError':
      status = 400;
      break;
    case 'UnauthenticatedError':
      status = 401;
      break;
    case 'UnauthorizedError':
      status = 403;
      break;
    default:
      status = 500;
  }

  return NextResponse.json(
    {
      success: false,
      error: error.message,
    },
    { status: status }
  );
};
