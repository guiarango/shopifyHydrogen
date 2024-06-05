import {useLoaderData} from '@remix-run/react';

export const loader = async ({params}) => {
  return {name: params.name};
};

export default function HelloWorld() {
  const {name} = useLoaderData();
  return <div>Hello, {name}!</div>;
}
