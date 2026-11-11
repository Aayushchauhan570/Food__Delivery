import { render, screen } from "@testing-library/react"
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resMock_Data.json";
import "@testing-library/jest-dom";

it("should test the loading of restaurant card", () => {
    render(
        <RestaurantCard resData={MOCK_DATA} />
    )

    const name = screen.getByText("The Bon Bon Bakers");

    expect(name).toBeInTheDocument();
})