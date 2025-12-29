const FRONT_BASE = '/front';
const ADMIN_BASE = '/admin';

export const FRONT_URL = {
  BASE: FRONT_BASE,
  HOME: `${FRONT_BASE}/home`,
  POSTS_WITH_ID: `${FRONT_BASE}/posts/:id`,
  CATEGORIES: `${FRONT_BASE}/categories`,
  CATEGORIES_WITH_ID: `${FRONT_BASE}/categories/:id`,
  CONTACT: `${FRONT_BASE}/contact`,
};

export const ADMIN_URL = {
  BASE: ADMIN_BASE,
  CONTACTS: `${ADMIN_BASE}/contacts`,
};

export const AUTH_URL = {
  LOGIN: '/login',
};
