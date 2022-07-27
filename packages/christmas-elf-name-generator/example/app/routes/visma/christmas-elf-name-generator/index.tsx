import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

const title = 'Christmas Elf Name Generator';
const description =
  'With this high-level neural network -assisted Christmas Elf Name Generator, you can now generate your own custom elf name just in time for christmas!';

export let meta: MetaFunction = () => {
  return { title, description };
};

export default function Index() {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>
        <Link to="generator">
          Yes, I want to find out my Christmas Elf Name!
        </Link>
      </p>
    </>
  );
}
