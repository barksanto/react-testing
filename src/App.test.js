import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders learn react link", () => {
  // must render component, otherise it will not be in the document
  render(<App />)
  // select this link element by text
  const linkElement = screen.getByText(/learn react/i)
  // assert that the link element is in the document
  expect(linkElement).toBeInTheDocument()
})
