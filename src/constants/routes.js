export const ROUTE_PATHS = {
  index: '/',
  home: '/home',
  login: '/login',
  mainDetail: '/main-detail/:id'
};

export function getMainDetailPath(id) {
  return `/main-detail/${id}`;
}
