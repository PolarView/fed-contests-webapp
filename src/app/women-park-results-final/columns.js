"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns = [
  {
    accessorKey: "name",
    header: "Имя"
  },
  {
    accessorKey: "surname",
    header: "Фамилия"
  },
  {
    accessorKey: "firstAvarageScore",
    header: "средняя оценка 1"
  },
  {
    accessorKey: "secondAvarageScore",
    header: "средняя оценка 2"
  },
  {
    accessorKey: "thirdAvarageScore",
    header: "средняя оценка 3"
  },
  {
    accessorKey: "fourthAvarageScore",
    header: "средняя оценка 4"
  },
  {
    accessorKey: "fifthAvarageScore",
    header: "средняя оценка 5"
  },
  {
    accessorKey: "finalScore",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Финальная оценка
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    }
  }
];
