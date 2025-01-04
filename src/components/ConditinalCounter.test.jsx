import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from '@testing-library/react';
import ConditionalCounter from './ConditionalCounter'

const renderConditionalCounter = () => {
  render(<ConditionalCounter />)
}
 
describe("ConditionalCounter", () => {
  it("should render the component ConditionalCounter", () => {
    renderConditionalCounter()
    expect(screen.getByText(/Counter/i)).toBeInTheDocument();
  });

  it('should increase by 1 when click on increase button', () => {
    renderConditionalCounter()
    const incrementButton = screen.getByText('Increase')
    fireEvent.click(incrementButton)
    expect(screen.getByText('Counter: 1')).toBeInTheDocument();
  })

  it('should decrease by 1 when click on decrease button', () => {
    renderConditionalCounter()
    const decreaseButton = screen.getByText('Decrease')
    fireEvent.click(decreaseButton)
    expect(screen.getByText('Counter: -1')).toBeInTheDocument();
  })

  it('should restart counter when click on Restart button', () => {
    renderConditionalCounter()
    const restartCounter = screen.getByText('Restart')
    fireEvent.click(restartCounter)
    expect(screen.getByText('Counter: 0')).toBeInTheDocument();
  })
});
