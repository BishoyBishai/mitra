export const PATHS = {
  INDEX: `/`,
  LOGIN: `/sign-in`,
  SIGN_UP: `/sign-up`,
  PRODUCTS: `/products`,
  MY_PRODUCTS: `/products/me`,
  PRODUCT: (pid=':pid') => `/products/${pid}`,
};
