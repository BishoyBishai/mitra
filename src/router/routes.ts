export const PATHS = {
  INDEX: `/`,
  LOGIN: `/sign-in`,
  SIGN_UP: `/sign-up`,
  PRODUCTS: `/products`,
  CREATE_PRODUCT: `/products/new`,
  PRODUCT: (pid=':pid') => `/products/${pid}`,
};
