import { useTranslation } from "react-i18next";
import { memo, useCallback, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { useSelector } from "react-redux";

import { AppModal } from "@/shared/ui/AppModal";
import { AppDrawer } from "@/shared/ui/AppDrawer";
import { AppText } from "@/shared/ui/deprecated/AppText";
import {
  getAuthData,
  saveJsonSettings,
  useJsonSettings,
} from "@/entities/User";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";

interface ArticlePageGreetingProps {
  className?: string;
}

export const ArticlePageGreeting = memo((props: ArticlePageGreetingProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [isOpen, setOpen] = useState(false);

  const authData = useSelector(getAuthData);
  const { articlesPageHasBeenOpened } = useJsonSettings();

  const onClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (authData && !articlesPageHasBeenOpened) {
      setOpen(true);
      dispatch(saveJsonSettings({ articlesPageHasBeenOpened: true }));
    }
  }, [articlesPageHasBeenOpened, authData, dispatch]);

  const text = (
    <AppText
      title={t(`article:WelcomeTitle`)}
      text={t(`article:WelcomeText`)}
    />
  );

  if (isMobile) {
    return (
      <AppDrawer isOpen={isOpen} onClose={onClose}>
        {text}
      </AppDrawer>
    );
  }

  return (
    <AppModal lazy isOpen={isOpen} onClose={onClose}>
      {text}
    </AppModal>
  );
});

ArticlePageGreeting.displayName = `ArticlePageGreeting`;
