import { AppSidebar } from '@/components/ui/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<SidebarProvider>
				<AppSidebar />
				<main>
					{children}
				</main>
			</SidebarProvider>
		</html>
	);
}
