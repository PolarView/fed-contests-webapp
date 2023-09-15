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
    accessorKey: "firstAvarageBestTrick",
    header: "лучший трюк 1"
  },
  {
    accessorKey: "secondAvarageBestTrick",
    header: "лучший трюк  2"
  },
  {
    accessorKey: "thirdAvarageBestTrick",
    header: "лучший трюк 3"
  },
  {
    accessorKey: "fourthAvarageBestTrick",
    header: "лучший трюк 4"
  },
  {
    accessorKey: "fifthAvarageBestTrick",
    header: "лучший трюк 5"
  },
  {
    accessorKey: "firstAvarageRun",
    header: "заезд 1"
  },
  { accessorKey: "secondAvarageRun", header: "заезд 2" },
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
