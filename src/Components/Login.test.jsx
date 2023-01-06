import { fireEvent, render, screen } from "@testing-library/react"
import Login from "./Login"

describe("Login", () => { 
  it("renders Login component", () => {
    render(<Login />)
    expect(screen.getByText("Login")).toBeInTheDocument()
  })

  it("username input is rendered", () => {
    render(<Login />)
    const usernameInput = screen.getByPlaceholderText("username")
    expect(usernameInput).toBeInTheDocument()
  })

  it('renders enter button', () => {
    render(<Login />)
    const loginButton = screen.getByRole("button")
    expect(loginButton).toBeInTheDocument()
  })

   it("username input is should be empty", () => {
    render(<Login />)
    const usernameInput = screen.getByPlaceholderText("username")
    expect(usernameInput.value).toBe("")
  })

  it('button is disabled if inputs arent filled', () => {
    render(<Login />)
    const loginButton = screen.getByRole("button")
    expect(loginButton).toBeDisabled()
  })

  it('error message should not be visible', () => { 
    render(<Login />)
    const errorMessage = screen.getByText("Something went wrong.")
    expect(errorMessage).not.toBeVisible()
  })

  it("username input should change", () => {
    render(<Login />)
    const usernameInputEl = screen.getByPlaceholderText("username")

    const testValue = "test"
    fireEvent.change(usernameInputEl, { target: { value: testValue } })
    expect(usernameInputEl.value).toBe(testValue)
  })

   it("password input should change", () => {
     render(<Login />)
     const passwordInputEl = screen.getByPlaceholderText("password")
     const testValue = "test"
     fireEvent.change(passwordInputEl, { target: { value: testValue } })
     expect(passwordInputEl.value).toBe(testValue)
   })
  
   it('button should not be disabled when inputs exist', () => {
    render(<Login />)
    const loginButton = screen.getByRole("button")
    const usernameInput = screen.getByPlaceholderText("username")
    const passwordInputEl = screen.getByPlaceholderText("password")

    const fakeTestValue = "test"
    
    fireEvent.change(usernameInput, { target: { value: fakeTestValue } })
    fireEvent.change(passwordInputEl, { target: { value: fakeTestValue } })
    //  const fakePassword = "test123"
    expect(loginButton).not.toBeDisabled()
  })


})

