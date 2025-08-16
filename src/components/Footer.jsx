import { memo } from 'react';

const Footer = memo(() => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer content will be implemented here */}
        <p>&copy; 2024 Dias Cake. All rights reserved.</p>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
