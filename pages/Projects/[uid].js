import { useRouter } from "next/router";
import NudeLayout from "../../components/layouts/NudeLayout";
import ProjectLayout from "../../components/layouts/ProjectLayout";

export default function ProjectPage() {
  const router = useRouter();
  const { uid } = router.query;
  return <h1>{uid}</h1>;
}

ProjectPage.getLayout = function getLayout(ProjectPage) {
  return (
    <NudeLayout>
      <ProjectLayout>{ProjectPage}</ProjectLayout>
    </NudeLayout>
  );
};
