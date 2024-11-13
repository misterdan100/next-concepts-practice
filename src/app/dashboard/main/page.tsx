import { WidgetsGrid } from "@/components";


export default function MainPage() {
  
  
  return (
    <div className="p-2 text-black">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl ">Information</span>

      <WidgetsGrid />
    </div>
  )
}