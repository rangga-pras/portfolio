import { render, screen, fireEvent } from '@testing-library/react';
import { ContactForm } from '../components/ui/ContactForm';
import { describe, it, expect } from 'vitest';

describe('ContactForm', () => {
  it('renders and submits form correctly', () => {
    render(<ContactForm />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello!' } });

    fireEvent.click(submitButton);

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(messageInput).toHaveValue('');
  });
});
