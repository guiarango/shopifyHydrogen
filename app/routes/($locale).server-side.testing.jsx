import {json} from '@remix-run/server-runtime';

export function loader() {
  return json({
    message: 'Hello from the server',
  });
}

export function action({request}) {
  return json({
    method: request.method,
    body: request.body,
  });
}
