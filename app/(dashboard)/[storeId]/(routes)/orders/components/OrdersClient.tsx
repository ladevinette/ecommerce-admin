"use client";

import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { OrdersColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface OrdersClientProps {
  data: OrdersColumn[];
}

const OrdersClient: React.FC<OrdersClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />

      <Separator />
      <DataTable columns={columns} data={data} searchKey="products" />
    </>
  );
};

export default OrdersClient;
