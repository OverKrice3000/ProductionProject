import type { Profile, ValidateProfileError } from "@/entities/Profile";

export interface ProfileRootSchema {
  profile?: ProfileSchema;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  readonly: boolean;
  loadingError?: string;
  validateErrors?: ValidateProfileError[];
}
