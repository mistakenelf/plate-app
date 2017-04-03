import NProgress from 'nprogress';
import Router from 'next/router';

const configureLoadingProgressBar = () => {
  Router.onRouteChangeStart = () => NProgress.start();
  Router.onRouteChangeComplete = () => NProgress.done();
  Router.onRouteChangeError = () => NProgress.done();
};

export default configureLoadingProgressBar;
