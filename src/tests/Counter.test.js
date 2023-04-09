// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
    render(<Counter />);
})

test('renders counter message', () => {
    const messageElement = screen.getByText('Counter');
    expect(messageElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    const countElement = screen.getByTestId('count');
    expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
    const countElement = screen.getByTestId('count');
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
    const countElement = screen.getByTestId('count');
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton); 
    expect(countElement).toHaveTextContent('-1');
});
