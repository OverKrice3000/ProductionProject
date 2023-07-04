import userEvent from "@testing-library/user-event";

declare module "@testing-library/user-event" {
  export default userEvent;
}
