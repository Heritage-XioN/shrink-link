import { AppSidebar } from '@/components/ui/app-sidebar';
import DashFooter from '@/components/ui/dashFooter';
import DashNav from '@/components/ui/dashNav';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
			<SidebarProvider>
				<AppSidebar />
				<DashNav />
				<div className='py-14 px-8 w-full'>{children}</div>
				<DashFooter />
			</SidebarProvider>
		</main>
	);
}
