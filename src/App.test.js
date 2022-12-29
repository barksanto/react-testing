import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders learn react link", () => {
  // must render component, otherise it will not be in the document
  render(<App />)
  // @ select this link element by its text
  // const linkElement = screen.getByText(/learn react/i)

  // @ select this link element by its data-testid (does same as above)
  const linkElement = screen.getByTestId("learn-react-link")
  // assert that the link element is in the document
  expect(linkElement).toBeInTheDocument()
})
