import NProgress from 'nprogress'
import Router from 'next/router'

// Show progress when routes change
export default function configureLoadingProgressBar() {
  Router.onRouteChangeStart = () => NProgress.start()
  Router.onRouteChangeComplete = () => NProgress.done()
  Router.onRouteChangeError = () => NProgress.done()
}
