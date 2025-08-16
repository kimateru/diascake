import { memo } from 'react';

const Header = memo(() => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Header content will be implemented here */}
        <h1>Header Component</h1>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
