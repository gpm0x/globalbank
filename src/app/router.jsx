import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loading from '@components/common/loading';

const HomePage = lazy(() => import('@routes/home'));
const AboutPage = lazy(() => import('@routes/about'));
const PricingPage = lazy(() => import('@routes/pricing'));
const ContactPage = lazy(() => import('@routes/contact'));
const LoginPage = lazy(() => import('@routes/login'));
const RegisterPage = lazy(() => import('@routes/register'));

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<Loading fullScreen message="Carregando página..." />}>
    {children}
  </Suspense>
);

const createRoute = (path, Component, name, label = null, showInNav = false) => ({
  path,
  name,
  label,
  showInNav,
  element: (
    <SuspenseWrapper>
      <Component />
    </SuspenseWrapper>
  ),
});

const routes = [
  createRoute('/', HomePage, 'home', 'Início', true),
  createRoute('/about', AboutPage, 'about', 'Sobre', true),
  createRoute('/pricing', PricingPage, 'pricing', 'Preços', true),
  createRoute('/contact', ContactPage, 'contact', 'Contato', true),
  createRoute('/login', LoginPage, 'login', 'Entrar'),
  createRoute('/register', RegisterPage, 'register', 'Cadastrar'),
];

export const router = createBrowserRouter(routes);

export const getRouteByName = (name) => {
  const route = routes.find(r => r.name === name);
  return route ? route.path : '/';
};

export const generatePath = (name, params = {}) => {
  let path = getRouteByName(name);
  Object.keys(params).forEach(key => {
    path = path.replace(`:${key}`, params[key]);
  });
  return path;
};

export const getNavigationRoutes = () => {
  return routes.filter(route => route.showInNav).map(route => ({
    to: route.path,
    label: route.label,
    name: route.name
  }));
};