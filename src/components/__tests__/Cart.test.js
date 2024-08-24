import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import TempCart from "../TempCart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Load Restaurant Menu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <TempCart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Pot Rice(3)");

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("fooditems").length).toBe(3);

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("fooditems").length).toBe(5);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("fooditems").length).toBe(3);

  expect(screen.getByText("Cart is empty. Add Items to the cart!"));
  z.toBeInTheDocument;
});
