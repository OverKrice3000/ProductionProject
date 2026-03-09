## User entity

This entity manages the core user data, authentication state, and role-based access control, while also handling persistent user settings and preferences.

### Public api

#### Selectors & Hooks

- `useUserInitialized` - A hook/selector to check if the user data has been initialized at the start of application.

- `useJsonSettings` - A hook to access all user configuration settings.

- `useJsonSettingByKey` - A hook to access a specific user setting by its key.

- `isUserAdmin` - A selector to determine if the user has administrator privileges.

- `isUserManager` - A selector to determine if the user has manager privileges.

- `getUserRoles` - A selector to retrieve all roles assigned to the user.

- `getAuthData` - A selector to get the current user's information.

- `useUserData` - A hook to initialize user's data at the start of application

#### Services

- `saveJsonSettings` - A service for updating and saving user-specific configuration.

#### Slice

- `userActions` - Action creators for modifying the user state.

- `userReducer` - The reducer for handling user-related state changes.

#### Types

- `User` - A type describing the user object.

- `UserRole` - A type for available user roles.

- `UserRootSchema` - A type defining the structure of the user slice.
