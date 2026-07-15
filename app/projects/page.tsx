import { AllProjects } from "@/pages/AllProjects";


export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ project?: string }>;
}) {
  const params = await searchParams;
  const initialProject = Number(params.project ?? 0);

  return <AllProjects initialProject={initialProject} />;
}