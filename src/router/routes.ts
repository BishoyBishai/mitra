export const PATHS = {
  INDEX: `/`,
  LOGIN: `/sign-in`,
  SIGN_UP: `/sign-up`,
  PRODUCTS: `/products`,
  CREATE_PRODUCT: `/products/new`,
  MY_PRODUCTS: `/products/me`,
  PRODUCT: (pid=':pid') => `/products/${pid}`,
};
