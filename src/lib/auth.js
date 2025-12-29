import { USER_ROLE } from '@/constant/user-role';
import { db } from './database';
import {
  UnauthenticatedError,
  UnauthorizedError,
  ValidationError,
} from './errors';
import { decrypt } from './session';
import { validateEmail } from './validation';

export const verifyToken = async (request) => {
  const accessToken = request.headers.get('access-token');

  if (!accessToken) {
    throw new UnauthenticatedError('Authentication required');
  }

  const user = (await decrypt(accessToken))?.user;

  if (user.role != USER_ROLE.ADMIN) {
    throw new UnauthorizedError('Access denied');
  }
};

export const login = async ({ email, password }) => {
  if (!email || !password) {
    throw new ValidationError('Email and password are required');
  }

  validateEmail(email);

  if (password > 6) {
    throw new ValidationError('Password cannot exceed 6 characters');
  }

  const user = await db.getUser(email);
  const result = user.password === password;

  if (!result) {
    throw new UnauthenticatedError('Invalid login credentials');
  }

  return user;
};
