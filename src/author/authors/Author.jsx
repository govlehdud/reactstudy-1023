import { Link, Outlet, useOutletContext, useParams } from 'react-router-dom';
import { authors } from '../../db';

export default function Authors() {
  const { authorId } = useParams();
  const selectName = authors[Number(authorId) - 1].name;
  const books = authors.find((author) => author.name === selectName);

  return (
    <div>
      <h1>{authors[Number(authorId) - 1].name}</h1>

      {books.masterpiece.map((masterpiece) => (
        <li key={masterpiece.name}>
          <Link to={`/authors/${authorId}/${masterpiece.name}`}>
            {masterpiece.name}: /authors/{authorId}/{masterpiece.name}
          </Link>
        </li>
      ))}
      <Outlet />
    </div>
  );
}
