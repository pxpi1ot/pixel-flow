import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import DesktopSidebar from "@/components/Sidebar";
import { ModeToggle } from "@/components/ThemeModelToggle";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex h-screen">
			{/* 侧边栏 */}
            <DesktopSidebar />
			{/* 主内容 */}
			<div className="flex flex-col flex-1 min-h-screen">
				<header className="flex items-center justify-between px-6 py-4 h-[50px] container">
					<BreadcrumbHeader />
					<div className="gap-1 flex items-center">
						<ModeToggle />
					</div>
				</header>
				<Separator />
				<div className="overflow-auto">
					<div className="flex-1 container py-4 text-accent-foreground">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
