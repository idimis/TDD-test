
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/src/components/Header';


describe('Header Component', () => {
  it('renders the header with title and subtitle', () => {
    render(<Header />);

    // Check for the title
    expect(screen.getByText('New World')).toBeInTheDocument();

    // Check for the subtitle
    expect(screen.getByText('Better Environment,')).toBeInTheDocument();
    expect(screen.getByText('Happier Generation.')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);

    // Check for navigation links
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Teams')).toBeInTheDocument();
    expect(screen.getByText('Take the Quiz!')).toBeInTheDocument();
  });

  it('toggles mobile menu visibility when button is clicked', () => {
    render(<Header />);

    // Initially, the mobile menu should be hidden
    expect(screen.queryByText('Home')).not.toBeVisible();

    // Click the toggle button
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);

    // Now, the mobile menu should be visible
    expect(screen.getByText('Home')).toBeVisible();

    // Click the toggle button again to close the menu
    fireEvent.click(toggleButton);

    // Now, the mobile menu should be hidden again
    expect(screen.queryByText('Home')).not.toBeVisible();
  });
});

