import { render, screen } from '@testing-library/react';
import NavText from './NavText';

describe('NavText Component', () => {
  beforeEach(() => {
    render(<NavText />);
  });

  it('renders the title "Best Quality Products"', () => {
    expect(screen.getByText('Best Quality Products')).toBeInTheDocument();
  });

  it('renders the heading "Join the Organic Movements!"', () => {
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Join the Organic Movements!');
  });

  it('renders the paragraph with appropriate content', () => {
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
  });

  it('renders the button with text "SHOP NOW"', () => {
    expect(screen.getByRole('button', { name: /SHOP NOW/i })).toBeInTheDocument();
  });

});
