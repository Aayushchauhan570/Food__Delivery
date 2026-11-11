import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
// import { BrowserRouter } from "react-router"
import appStore from "../utils/appStore"
import Header from "../components/Header";
import "@testing-library/jest-dom"


// Mock React Router's Link component
jest.mock("react-router", () => ({
  Link: ({ to, children }) => (
    <a href={to}>{children}</a>
  ),
}));

it("should render header component with login button", () =>{
    render(
        // <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        // </BrowserRouter>
    )

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();
})


it("should render header component with cart items 0", () =>{
    render(
        // <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        // </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart (0 items)");

    expect(cartItems).toBeInTheDocument();
})


it("should render header component with cart items", () =>{
    render(
        // <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        // </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
})


it("should render Logout button on Click of login btn", () =>{
    render(
        // <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        // </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
})