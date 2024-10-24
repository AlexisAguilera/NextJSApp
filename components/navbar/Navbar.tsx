import NavSearch from './NavSearch';
import LinksDroppdown from './LinksDropdown';
import DarkMode from './DarkMode';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className='border-b'>
      <div className='container flex flex-col sm:flex-row justify-between sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
        <Logo />
        <NavSearch />
        <div className='flex gap-4 items-center'>
          <DarkMode />
          <LinksDroppdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
