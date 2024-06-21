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

  //Assertion: correct number of rows in the table
});

test("Render the email and name of each user", () => {
  //
  //
  //
});
