import { Link, Outlet, useParams } from 'react-router-dom';
// import { authors } from '../../../db';

export default function Series() {
  // const { masterpieceId, seriesId } = useParams();
  // const formattedBookName = formatName(bookId);

  return (
    <div>
      <h1>34532145342</h1>
      <h2>Series.jsx</h2>
      {/* <ul style={{ listStyle: 'none' }}>
        <li>
          <Link to={`/authors/${authorId}/${bookId}/chapters`}>Chapter</Link>
        </li>
        <li>
          <Link to={`/authors/${authorId}/${bookId}/characters`}>
            Characters
          </Link>
        </li>
      </ul> */}
      <Outlet />
    </div>
  );
}
