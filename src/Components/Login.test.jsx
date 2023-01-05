import { render, screen } from "@testing-library/react"
import Login from "./Login"

describe("Login", () => { 
  it("renders Login component", () => {
    render(<Login />)
    expect(screen.getByText("Login")).toBeInTheDocument()
  })

  it("username input is rendered", () => {
      render(<Login />)
    expect(screen.getByPlaceholderText("username")).toBeInTheDocument()
  })

  
})

