import type { PagesFunction } from '@cloudflare/workers-types';

interface Env {}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, next } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;
  const search = url.search;

  // Skip redirect for assets
  const assetExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.ico', '.css', '.js', '.woff', '.woff2'];
  const isAsset = assetExtensions.some(ext => pathname.endsWith(ext));
  
  // Skip redirect for specific paths
  const skipPaths = ['/robots.txt', '/sitemap.xml', '/favicon.svg'];
  const shouldSkip = isAsset || skipPaths.includes(pathname);

  if (shouldSkip) {
    return next();
  }

  // Get country from CF
  const country = request.cf?.country as string | undefined;

  // Check if already has language prefix
  const hasDePrefix = pathname.startsWith('/de/') || pathname === '/de';
  const hasEsPrefix = pathname.startsWith('/es/') || pathname === '/es';

  // Redirect logic
  if (country === 'DE' && !hasDePrefix) {
    const newPath = pathname === '/' ? '/de/' : `/de${pathname}`;
    return Response.redirect(`${url.origin}${newPath}${search}`, 302);
  }

  if (country === 'ES' && !hasEsPrefix && !hasDePrefix) {
    const newPath = pathname === '/' ? '/es/' : `/es${pathname}`;
    return Response.redirect(`${url.origin}${newPath}${search}`, 302);
  }

  return next();
};
