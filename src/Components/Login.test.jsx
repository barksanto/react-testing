import { render, screen } from "@testing-library/react"
import Login from "./Login"

describe("Login", () => { 
  test("renders Login component", () => {
    render(<Login />)
    expect(screen.getByText("Login")).toBeInTheDocument()
  })
})