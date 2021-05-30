export function createJsonResponse<T>(
  response: T,
  init: ResponseInit
): Response {
  return new Response(JSON.stringify(response), init);
}
