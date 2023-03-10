import { render, screen } from "@testing-library/react"
import App from "./App"

describe("App", () => {
  // it("renders learn react link", () => {
  //   // must render component, otherise it will not be in the document
  //   render(<App />)
  //   // @ select this link element by its text
  //   // const linkElement = screen.getByText(/learn react/i)
  //   // @ select this link element by its data-testid (does same as above)
  //   const linkElement = screen.getByTestId("target-link-anchor")
  //   // assert that the link element is in the document (does it exist in the doc?)
  //   expect(linkElement).toBeInTheDocument()
  // })
  // @ http://localhost:51245/
  it("renders a div with classname App", () => {
    render(<App />)
    // @ select this div element by its class
    const divElement = screen.getByTestId("App")
    // assert that the div element is in the document (does it exist in the doc?)
    expect(divElement).toBeInTheDocument()
  })

  // it("renders an image with class App-logo", () => {
  //   render(<App />)
  //   // @ select this image element by its class
  //   const imageElement = screen.getByAltText(/logo/i)
  //   // assert that the image element is in the document (does it exist in the doc?)
  //   expect(imageElement).toBeInTheDocument()
  // })

  // it("renders 3 list items", () => {
  //   render(<App />)
  //   // cmd click for line test
  //   const listElements = screen.getAllByRole("listitem")
  //   expect(listElements).toHaveLength(3)
  // })
})
