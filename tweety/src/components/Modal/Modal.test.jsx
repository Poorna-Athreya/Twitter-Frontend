/* eslint-disable max-len */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './index';

const mockSetShowModal = jest.fn();
const mockModalSubmitHandler = jest.fn();
const mockNavigate = jest.fn();
const mockParams = jest.fn().mockResolvedValue(2);
jest.mock('react-router-dom', () => ({ useNavigate: () => mockNavigate, useParams: () => mockParams }));

describe('Modal', () => {
  beforeEach(() => {
    render(<Modal setShowModal={mockSetShowModal} modalSubmitHandler={mockModalSubmitHandler} />);
    mockSetShowModal.mockClear();
    mockNavigate.mockClear();
    mockParams.mockClear();
  });

  it('should take a snapshot for Modal', () => {
    const { asFragment } = render(<Modal setShowModal={mockSetShowModal} modalSubmitHandler={mockModalSubmitHandler} />);
    expect(asFragment(<Modal setShowModal={mockSetShowModal} modalSubmitHandler={mockModalSubmitHandler} />)).toMatchSnapshot();
  });
  it('should have the required elements when Modal is rendered with the setShowModal Function', () => {
    expect(screen.queryByTestId('modalCloseButton')).toBeTruthy();
    expect(screen.queryByTestId('modalHeading')).toBeTruthy();
    expect(screen.queryByTestId('modalInput')).toBeTruthy();
    expect(screen.queryByTestId('modalSubmitButton')).toBeTruthy();
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
  it('should call the mock modal submit handler function with the mock input value when the submit button is clicked', () => {
    const mockModalInput = 'new tweet';
    fireEvent.change(screen.getByTestId('modalInput'), {
      target: { value: mockModalInput },
    });
    expect(screen.getByTestId('modalInput')).toHaveAttribute(
      'value',
      mockModalInput,
    );
    fireEvent.click(screen.getByTestId('modalSubmitButton'));
    expect(mockModalSubmitHandler).toHaveBeenCalledTimes(1);
    expect(mockModalSubmitHandler).toHaveBeenCalledWith(mockModalInput);
  });
  it('should call the mockSetShowModal with value false when the close button is clicked', () => {
    fireEvent.click(screen.getByTestId('modalCloseButton'));
    expect(mockSetShowModal).toHaveBeenCalledTimes(1);
    expect(mockSetShowModal).toHaveBeenCalledWith(false);
  });
});
