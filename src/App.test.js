// src/App.test.js
import { render, screen } from "@testing-library/react";
// 1. Import BrowserRouter
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test('Renders the "Reserve a Table" button on the homepage', () => {
  // 2. Wrap the <App /> component in <BrowserRouter>
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // 3. Find the "Reserve a Table" button (which is a link)
  // We use /i to make the text case-insensitive
  const reserveButton = screen.getByText(/Reserve a Table/i);

  // 4. Assert that the button is in the document
  expect(reserveButton).toBeInTheDocument();
});
