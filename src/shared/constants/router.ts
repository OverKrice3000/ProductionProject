export enum AppRoutes {
  MAIN = `main`,
  ABOUT = `about`,
  PROFILE = `profile`,
  ARTICLES = `articles`,
  ARTICLE_DETAILS = `article_details`,
  ARTICLE_CREATE = `article_create`,
  ARTICLE_EDIT = `article_edit`,
  ADMIN_PANEL = `admin_panel`,
  FORBIDDEN_PAGE = `forbidden_page`,
  SETTINGS = `settings`,
  NOT_FOUND = `notFound`,
}

export const GetRoutePath = {
  [AppRoutes.MAIN]: () => `/`,
  [AppRoutes.ABOUT]: () => `/about`,
  [AppRoutes.PROFILE]: (id: string) => `/profile/${id}`,
  [AppRoutes.ARTICLES]: () => `/articles`,
  [AppRoutes.ARTICLE_DETAILS]: (id: string) => `/articles/${id}`,
  [AppRoutes.ARTICLE_CREATE]: () => `/articles/new`,
  [AppRoutes.ARTICLE_EDIT]: (id: string) => `/articles/${id}/edit`,
  [AppRoutes.ADMIN_PANEL]: () => `/admin`,
  [AppRoutes.SETTINGS]: () => `/settings`,
  [AppRoutes.FORBIDDEN_PAGE]: () => `/forbidden`,
  [AppRoutes.NOT_FOUND]: () => `*`,
};
