'use client'

import { useAppSelector } from "@/store";
import { SimpleWidget } from "../SimpleWidget";
import { IoCartOutline } from "react-icons/io5";

export function WidgetsGrid() {
    const { count } = useAppSelector( state => state.counter)
    
  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget 
        title={count.toString()} 
        subTitle="Products added"
        label="Counter"
        icon={<IoCartOutline size={70}className="text-blue-600"/>}
        href="/dashboard/counter"
    />
    </div>
  );
}
