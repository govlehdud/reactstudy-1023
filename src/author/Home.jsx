import { Link } from 'react-router-dom';
import { authors } from '../db';

export default function Home() {
  return (
    <>
      <div>
        <h1>Best Seller Authors</h1>
        {authors.map((author) => (
          <li key={author.id}>
            <Link to={`/author/${author.id}`}>{author.name}</Link>
          </li>
        ))}
      </div>
    </>
  );
}
