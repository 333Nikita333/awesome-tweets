import { Link, NavList } from './Navigation.styled';
import { AiFillHome } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';

const Navigation = () => {
  return (
    <nav>
      <NavList>
        <li>
          <Link to='/'>
            <AiFillHome />
            Home
          </Link>
        </li>
        <li>
          <Link to='/tweets'>
            <FaUsers />
            Tweets
          </Link>
        </li>
      </NavList>
    </nav>
  );
};

export default Navigation;
