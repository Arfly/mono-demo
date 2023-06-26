import { RouteObject } from 'react-router-dom';
import Article from '../view/article/ArticleDetail';
import ArticleList from '../view/article/ArticleList';
import ArticleEditor from '../view/article/ArticleEditor';
import ArticleDefault from '../view/article/ArticleDefault';

const articleRoutes: RouteObject = {
  path: 'article',
  children: [
    { index: true, element: <ArticleDefault></ArticleDefault> },
    {
      path: 'list',
      element: <ArticleList></ArticleList>,
    },
    {
      path: ':id/editor',
      element: <ArticleEditor></ArticleEditor>,
    },
    {
      path: ':id',
      element: <Article></Article>,
    },
  ],
};

export default articleRoutes;
