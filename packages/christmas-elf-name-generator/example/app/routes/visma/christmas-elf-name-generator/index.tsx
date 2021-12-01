import type { MetaFunction } from 'remix';
import { Link } from 'remix';

const title = 'Christmas Elf Name Generator';
const description =
  'With this high-level neural network -assisted Christmas Elf Name Generator, you can now generate your own custom elf name just in time for christmas!';

export let meta: MetaFunction = () => {
  return { title, description };
};

export default function Index() {
  return (
    <>
      <h1 className="remix__title">{title}</h1>
      <p>{description}</p>
      <p className="remix__link">
        <Link to="generator">
          Yes, I want to find out my Christmas Elf Name!
        </Link>
      </p>
    </>
  );
}
