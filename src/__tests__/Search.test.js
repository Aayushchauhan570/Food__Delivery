import { fireEvent, render, screen } from "@testing-library/react";
// import userEvent from '@testing-library/user-event'
import Body from "../components/Body";
import MOCK_DATA from "../mocks/resListMOCK_DATA.json"
import { act } from "react";
import "@testing-library/jest-dom"

// Mock React Router's Link component
jest.mock("react-router", () => ({
  Link: ({ to, children }) => (
    <a href={to}>{children}</a>
  ),
}));

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> {
            return Promise.resolve(MOCK_DATA);
        }
    })
})



it("should search coffee restaurants", async() => {
    // const user = userEvent.setup();
    await act(async ()=> render(<Body />))
    // render(<Body />)

    const before = screen.getAllByTestId("resCard");
    // console.log("before: " ,before.length);

    const searchbtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");

    // await user.type(searchInput, {target : {value: "coffee"}});
    // await user.type(searchInput, "coffee");
    // await user.click(searchbtn);

    fireEvent.change(searchInput, {target : {value: "coffee"}});
    fireEvent.click(searchbtn);

    const card = screen.getAllByTestId("resCard");
    // console.log(card.length);

    expect(card.length).toBe(2);
});


it("should filter top rated restaurants",async () => {
    await act(()=> render(<Body />));

    const beforeCard = screen.getAllByTestId("resCard");
    expect(beforeCard.length).toBe(20);

    const filterBtn = screen.getByRole("button", {name: "Top rated Restaurant"});

    fireEvent.click(filterBtn);

    const afterCard = screen.getAllByTestId("resCard");
    expect(afterCard.length).toBe(3);
})