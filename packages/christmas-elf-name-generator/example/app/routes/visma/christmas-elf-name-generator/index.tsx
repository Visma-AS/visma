import type { MetaFunction } from 'remix';
import { Link } from 'remix';

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <p className="remix__link">
      <Link to="generator">Yes, I want to find out my Christmas Elf Name!</Link>
    </p>
  );
}
