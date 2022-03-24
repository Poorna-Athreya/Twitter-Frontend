import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './index';

const mockSetShowModal = jest.fn();
const mockNavigate = jest.fn();
const mockParams = jest.fn().mockResolvedValue(2);
jest.mock('react-router-dom', () => ({ useNavigate: () => mockNavigate, useParams: () => mockParams }));
jest.mock('../../utils/makeRequest/', () => () => Promise.resolve('Done'));

describe('Modal', () => {
  const original = window.location;
  beforeEach(() => {
    render(<Modal setShowModal={mockSetShowModal} />);
    mockSetShowModal.mockClear();
    mockNavigate.mockClear();
    mockParams.mockClear();
  });

  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { reload: jest.fn() },
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'location', { configurable: true, value: original });
  });
  it('should have the required elements when Modal is rendered with the setShowModal Function', () => {
    expect(screen.queryByTestId('modalCloseButton')).toBeTruthy();
    expect(screen.queryByTestId('modalHeading')).toBeTruthy();
    expect(screen.queryByTestId('modalInput')).toBeTruthy();
    expect(screen.queryByTestId('modalSubmitButton')).toBeTruthy();
    fireEvent.click(screen.getByTestId('modalSubmitButton'));
  });
  it('should change the modal input value when input text changes', () => {
    const mockModalInput = 'new tweet';
    fireEvent.change(screen.getByTestId('modalInput'), {
      target: { value: mockModalInput },
    });
    expect(screen.getByTestId('modalInput')).toHaveAttribute(
      'value',
      mockModalInput,
    );
  });
  it('should call the mock make request function when the submit button is clicked', () => {
    fireEvent.click(screen.getByTestId('modalSubmitButton'));
  });
  it('should call the mockSetShowModal with value false when the close button is clicked', () => {
    fireEvent.click(screen.getByTestId('modalCloseButton'));
    expect(mockSetShowModal).toHaveBeenCalledTimes(1);
    expect(mockSetShowModal).toHaveBeenCalledWith(false);
  });
});
