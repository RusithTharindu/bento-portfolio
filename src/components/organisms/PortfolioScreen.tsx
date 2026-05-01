import { PortfolioExperience } from "@/src/components/organisms/PortfolioExperience";
import { getGitHubActivity } from "@/src/lib/github";

export async function PortfolioScreen() {
  const activity = await getGitHubActivity();

  return <PortfolioExperience activity={activity} />;
}
