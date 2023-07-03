import prismadb from "@/lib/prismadb";

interface DashboardpageProps {
  params: { storeId: string };
}

const Dashboardpage: React.FC<DashboardpageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <div>Active store: {store?.name}</div>;
};

export default Dashboardpage;
