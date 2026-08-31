/**
 * Helper to get the correct path including any GitHub Pages repo base or custom domain (Clean URLs / BrowserRouter style)
 */
export function getAppPath(targetPath: string): string {
  let cleanTarget = targetPath.trim();
  if (cleanTarget.startsWith('#')) {
    cleanTarget = cleanTarget.slice(1);
  }
  if (cleanTarget.startsWith('/')) {
    cleanTarget = cleanTarget.slice(1);
  }

  // In browser, check if we're on a GitHub Pages repo subdirectory (e.g. username.github.io/repo-name/)
  if (typeof window !== 'undefined') {
    const isGithubIo = window.location.hostname.includes('github.io');
    const pathParts = window.location.pathname.split('/').filter(Boolean);

    if (isGithubIo && pathParts.length > 0) {
      const repoName = pathParts[0];
      // Strip repoName if cleanTarget already starts with it
      if (cleanTarget.startsWith(repoName + '/')) {
        cleanTarget = cleanTarget.slice(repoName.length + 1);
      } else if (cleanTarget === repoName) {
        cleanTarget = '';
      }
      return cleanTarget ? `/${repoName}/${cleanTarget}` : `/${repoName}/`;
    }
  }

  // Check Vite base URL if configured
  const base = import.meta.env.BASE_URL || '/';
  if (base && base !== '/' && base !== './') {
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    return cleanTarget ? `${cleanBase}/${cleanTarget}` : `${cleanBase}/`;
  }

  return cleanTarget ? `/${cleanTarget}` : '/';
}

/**
 * Safely push state preserving repository base path (clean URLs)
 */
export function pushAppPath(targetPath: string): void {
  if (typeof window === 'undefined') return;
  const fullPath = getAppPath(targetPath);
  try {
    window.history.pushState({}, '', fullPath);
  } catch (e) {
    console.error('pushAppPath error:', e);
  }
}

/**
 * Safely replace state preserving repository base path (clean URLs)
 */
export function replaceAppPath(targetPath: string): void {
  if (typeof window === 'undefined') return;
  const fullPath = getAppPath(targetPath);
  try {
    window.history.replaceState({}, '', fullPath);
  } catch (e) {
    console.error('replaceAppPath error:', e);
  }
}
