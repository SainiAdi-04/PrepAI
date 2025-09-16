import { getIndustryInsights } from "@/actions/dashboard";
import DashboardView from "./_components/dashboard-view";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const { isOnboarded } = await getUserOnboardingStatus();

  // If not onboarded, redirect to onboarding page
  // Skip this check if already on the onboarding page
  if (!isOnboarded) {
    redirect("/onboarding");
  }

  const insights = await getIndustryInsights();
  const { userId } = await auth();

  const user = await db.user.findUnique({
    where: { clerkUserId: userId }
  });

  return (
    <div className="container mx-auto">
      <DashboardView insights={insights} user={user} />
    </div>
  );
}