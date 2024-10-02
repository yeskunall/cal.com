import { _generateMetadata, getFixedT } from "app/_utils";

import { getServerSessionForAppDir } from "@calcom/features/auth/lib/get-server-session-for-app-dir";
import LegacyPage from "@calcom/features/ee/organizations/pages/settings/profile";
import SettingsHeader from "@calcom/features/settings/appDir/SettingsHeader";

export const generateMetadata = async () =>
  await _generateMetadata(
    (t) => t("profile"),
    (t) => t("profile_org_description")
  );

const Page = async () => {
  const session = await getServerSessionForAppDir();
  const t = await getFixedT(session?.user.locale || "en");

  return (
    <SettingsHeader
      title={t("profile")}
      description={t("profile_org_description")}
      borderInShellHeader={true}>
      <LegacyPage isAppDir={true} />
    </SettingsHeader>
  );
};

export default Page;
