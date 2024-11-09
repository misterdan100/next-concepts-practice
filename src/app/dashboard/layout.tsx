import { SideBar } from "@/components/";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen antialiased bg-slate-100 text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex h-full">
        <SideBar />

        <div className="w-full h-full overflow-y-scroll text-slate-900">
          {children}
        </div>
      </div>
    </div>
  );
}
