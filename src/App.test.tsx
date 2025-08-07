import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './components/navbar';

test('renders navbar component', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  // Your assertions here
});
