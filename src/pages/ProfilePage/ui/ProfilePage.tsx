import { memo } from "react";
import { useParams } from "react-router";

import { AppPage } from "@/shared/ui/AppPage";
import { classNames } from "@/shared/utils/classNames";
import { EditableProfile } from "@/features/EditableProfile";

const ProfilePage = memo(() => {
  const { id } = useParams();

  return (
    <AppPage className={classNames(``, {}, [])}>
      <EditableProfile profileId={id} />
    </AppPage>
  );
});

ProfilePage.displayName = `ProfilePage`;

export default ProfilePage;
