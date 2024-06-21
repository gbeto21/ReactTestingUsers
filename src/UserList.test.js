import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

test("Render one row per user", () => {
  //Render the component
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "sam", email: "sam@sam.com" },
  ];
  render(<UserList users={users} />);

  //Find all the rows in the table
  /*Genera una URL con el código generado para nuestro componente
  al cual podemos navegar.
  Despliega la URL en la consola cuando se ejecuta la prueba.
   */
  // screen.logTestingPlaygroundURL();
  const rows = screen.getAllByRole("row");

  //Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("Render the email and name of each user", () => {
  //
  //
  //
});
