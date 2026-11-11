import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../components/RestaurantMenu";
import Cart from "../components/Cart";
import { BrowserRouter, useParams } from "react-router";
import { act } from "react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import resData from "../utils/resData";
import Header from "../components/Header";
import "@testing-library/jest-dom"

jest.mock("react-router", () => ({
  Link: ({ to, children }) => (
    <a href={to}>{children}</a>
  ),
}));

global.fetch = jest.fn(()=>{
    return Promise.resolve(()=>{
        json: () => {
            return Promise.resolve(resData);
        }
    })
})


it("should load the restaurant Menu", async () => {
    await act(async () => render(
        <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
        </Provider>
    ))

    const accordionsHeader = screen.getByText(/Recommended/);
    // console.log(accordionsHeader);

    fireEvent.click(accordionsHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(20);

    const addBtn = screen.getAllByRole("button", {name: "ADD"});
    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);
    fireEvent.click(addBtn[2]);

    expect(screen.getByText("Cart (3 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(23);
    
    fireEvent.click(screen.getByRole('button', {name: "Clear Cart"}))
    expect(screen.getAllByTestId("foodItems").length).toBe(20);
    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();



})