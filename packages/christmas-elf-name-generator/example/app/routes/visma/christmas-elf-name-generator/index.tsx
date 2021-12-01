import type { MetaFunction } from 'remix';
import { Link } from 'remix';
import { description, title } from '../../../messages.json';

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
