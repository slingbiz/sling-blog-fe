export const ThemeStyle = {
  MODERN: 'modern',
  STANDARD: 'standard',
};
export const ThemeStyleRadius = {
  MODERN: 30,
  STANDARD: 4,
};
export const ThemeMode = {
  LIGHT: 'light',
  SEMI_DARK: 'semi-dark',
  DARK: 'dark',
};
export const LayoutType = {
  FULL_WIDTH: 'full-width',
  BOXED: 'boxed',
};
export const NavStyle = {
  DEFAULT: 'default',
  MINI: 'mini',
  MINI_SIDEBAR_TOGGLE: 'mini_sidebar_toggle',
  STANDARD: 'standard',
  HEADER_USER: 'user-header',
  HEADER_USER_MINI: 'user-mini-header',
  DRAWER: 'drawer',
  BIT_BUCKET: 'bit-bucket',
  H_DEFAULT: 'h-default',
  HOR_LIGHT_NAV: 'hor-light-nav',
  HOR_DARK_LAYOUT: 'hor-dark-layout',
};
export const FooterType = {
  FIXED: 'fixed',
  FLUID: 'fluid',
};
export const HeaderType = {
  DARK: 'dark',
  LIGHT: 'light',
};
export const RouteTransition = {
  NONE: 'none',
  FADE: 'fade',
  SLIDE_LEFT: 'slideLeft',
  SLIDE_RIGHT: 'slideRight',
  SLIDE_UP: 'slideUp',
  SLIDE_DOWN: 'slideDown',
};
export const Fonts = {
  LIGHT: '300',
  REGULAR: '400',
  MEDIUM: '500',
  BOLD: '600',
  EXTRA_BOLD: '600',
};

export const AuthType = {
  FIREBASE: 'firebase',
  AWS_COGNITO: 'aws_cognito',
  AUTH0: 'auth0',
  JWT_AUTH: 'jwt_auth',
};

var ApiConfig = {
  GET_INIT_PROPS: 'https://api.sling.biz/v1/frontend/getInitProps',
};

export default {
  AuthType: AuthType,
  Fonts: Fonts,
  RouteTransition: RouteTransition,
  HeaderType: HeaderType,
  FooterType: FooterType,
  NavStyle: NavStyle,
  LayoutType: LayoutType,
  ThemeMode: ThemeMode,
  ThemeStyleRadius: ThemeStyleRadius,
  ThemeStyle: ThemeStyle,
  ApiConfig: ApiConfig,
};
