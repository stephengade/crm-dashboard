import { AppSidebar } from "@/components/app-sidebar"
import GlobalNavigation from "@/components/dashboard/__global/global.nav";
import { RightSidebar } from "@/components/dashboard/__global/global.right-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function DashboardLayout({children}: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
    <GlobalNavigation />
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex md:hidden h-16 mt-14 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center  gap-2 px-4">
            Menu <SidebarTrigger className="-ml-1 " />
            {/* <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
          </div>
        </header>
        <main className="flex md:mt-4 flex-1 flex-col gap-4 p-4 pt-0">
          <section className="lg:mr-14 md:mt-14">{children}</section>

          <RightSidebar />
        </main>
      </SidebarInset>
    </SidebarProvider>
    </>
  )
}
