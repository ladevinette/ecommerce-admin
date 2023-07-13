import { format } from "date-fns";
import BillboardClient from "./components/CategoriesClient";
import prismadb from "@/lib/prismadb";
import { CategoriesColumn } from "./components/columns";
import { Billboard, Category } from "@prisma/client";

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedCategories: CategoriesColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.createdAt, "MMM do, yyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
