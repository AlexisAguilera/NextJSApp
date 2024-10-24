import { FaTent } from 'react-icons/fa6';
import Link from 'next/link';
import { Button } from '../ui/button';
const Logo = () => {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <FaTent />
      </Link>
    </Button>
  );
};
export default Logo;
