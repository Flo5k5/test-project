/**
 * Build an URL with parameters passed as arguments.
 *
 * @param {{
 *   baseUrl: string;
 *   params: Record<string, string>;
 * }} {
 *   baseUrl,
 *   params,
 * }
 * @returns {string} Full URL with parameters.
 */
export const buildUrlWithParams = ({
  baseUrl,
  params,
}: {
  baseUrl: string;
  params: Record<string, string>;
}): string => {
  const url = new URL(baseUrl);

  Object.keys(params).forEach((key: string) => url.searchParams.append(key, params[key]));

  return url.toString();
};
