export function createJsonResponse<T>(
  response: T,
  init: ResponseInit = {}
): Response {
  if (init.headers) {
    if (!(init.headers instanceof Headers)) {
      init.headers = new Headers(init.headers);
    }
    init.headers.set("Content-Type", "application/json");
  } else {
    init.headers = new Headers({
      "Content-Type": "application/json",
    });
  }

  return new Response(JSON.stringify(response), init);
}
