"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Cellaction } from "./cell-action";

export type BillboardColumn = {
  id: string;
  label: string;
  createdAt: string;
};

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "label",
    header: "Etichetta",
  },
  {
    accessorKey: "createdAt",
    header: "Data",
  },
  {
    id: "action",
    cell: ({ row }) => <Cellaction data={row.original} />,
  },
];
