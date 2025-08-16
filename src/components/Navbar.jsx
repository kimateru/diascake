import { memo } from 'react';

const Navbar = memo(() => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Navbar content will be implemented here */}
        <h2>Navbar Component</h2>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
