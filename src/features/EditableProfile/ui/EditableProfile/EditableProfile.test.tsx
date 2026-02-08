import userEvent from "@testing-library/user-event";
import { componentRender } from "@/shared/config/tests/render/componentRender";
import { EditableProfile, profileReducer } from "../..";
import { testDefaultProfile } from '@/entities/Profile';
import { screen } from "@testing-library/react";
import { testUser } from '@/entities/User';
import { $api } from "@/shared/api/api";

const renderOptions = {
  initialState: {
    profile: {
      readonly: true,
      data: testDefaultProfile,
      form: testDefaultProfile,
    },
    user: {
      authData: testUser,
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe(`EditableProfile`, () => {
  test(`Edit button logic correctness`, async () => {
    componentRender(<EditableProfile />, renderOptions);

    await userEvent.click(screen.getByRole(`button`, { name: /Edit/ }));
    expect(screen.getByRole(`button`, { name: /Cancel/ })).toBeInTheDocument();
  });

  test(`Cancel button logic correctness`, async () => {
    componentRender(<EditableProfile />, renderOptions);

    await userEvent.click(screen.getByRole(`button`, { name: /Edit/ }));

    await userEvent.clear(screen.getByRole(`textbox`, { name: /first name/i }));
    await userEvent.clear(screen.getByRole(`textbox`, { name: /last name/i }));

    await userEvent.type(screen.getByRole(`textbox`, { name: /first name/i }), `user`);
    await userEvent.type(screen.getByRole(`textbox`, { name: /last name/i }), `admin`);

    expect(screen.getByRole(`textbox`, { name: /first name/i })).toHaveValue(`user`);
    expect(screen.getByRole(`textbox`, { name: /last name/i })).toHaveValue(`admin`);

    await userEvent.click(screen.getByRole(`button`, { name: /Cancel/ }));

    expect(screen.getByRole(`button`, { name: /Edit/ })).toBeInTheDocument();
    expect(screen.getByRole(`textbox`, { name: /first name/i })).toHaveValue(testDefaultProfile.first);
    expect(screen.getByRole(`textbox`, { name: /last name/i })).toHaveValue(testDefaultProfile.lastname);
  });

  test(`Cancel button logic correctness`, async () => {
    componentRender(<EditableProfile />, renderOptions);

    await userEvent.click(screen.getByRole(`button`, { name: /edit/i }));
    await userEvent.clear(screen.getByRole(`textbox`, { name: /first name/i }));
    await userEvent.click(screen.getByRole(`button`, { name: /save/i }));

    expect(screen.getByRole(`alert`)).toBeInTheDocument();
  });

  test(`Cancel button logic correctness`, async () => {
    const mockPutRequest = jest.spyOn($api, `put`);
    componentRender(<EditableProfile />, renderOptions);

    await userEvent.click(screen.getByRole(`button`, { name: /edit/i }));
    await userEvent.type(screen.getByRole(`textbox`, { name: /first name/i }), `user`);
    await userEvent.click(screen.getByRole(`button`, { name: /save/i }));

    expect(mockPutRequest).toHaveBeenCalled();
  });
});
