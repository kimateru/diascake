import { memo } from 'react';

const Fillings = memo(() => {
  return (
    <section className="fillings">
      <div className="fillings-container">
        {/* Fillings content will be implemented here */}
        <h2>Fillings Component</h2>
      </div>
    </section>
  );
});

Fillings.displayName = 'Fillings';

export default Fillings;
