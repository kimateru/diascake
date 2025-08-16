import { memo } from 'react';

const Contacts = memo(() => {
  return (
    <section className="contacts">
      <div className="contacts-container">
        {/* Contacts content will be implemented here */}
        <h2>Contacts Component</h2>
      </div>
    </section>
  );
});

Contacts.displayName = 'Contacts';

export default Contacts;
