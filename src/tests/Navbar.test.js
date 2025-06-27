import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('renders all nav items and button', () => {
  render(<Navbar />);
  ['Home', 'About', 'Projects', 'Contact', 'HIRE ME'].forEach((text) => {
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
