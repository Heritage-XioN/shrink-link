"use client"
import { Home, Link as NextLink, LogOut } from 'lucide-react';
import Link from "next/link";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import Logo from './logo';


// Menu items.
const items = [
	{
		title: 'Dashboard',
		url: '/dashboard',
		icon: Home,
	},
	{
		title: 'My Links',
		url: '/dashboard/my-links',
		icon: NextLink,
	},
	{
		title: 'Log out',
		url: '#',
		icon: LogOut,
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarContent className='bg-[#F7F2FDFF] pl-4 pt-4'>
				<SidebarGroup>
					<SidebarGroupLabel className='text-[23px] leading-[23px] font-bold text-[#A667E4FF]'>
						<div className='w-9 h-9 mr-2 bg-[#A667E4FF] flex justify-center items-center rounded-[7px]'>
							<Logo style='text-[#FFFFFFFF]' />
						</div>
						ShrinkLink
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu className='mt-4'>
							{items.map((item) => (
								<SidebarMenuItem
									className='text-[#A667E4FF] font-bold'
									key={item.title}
								>
									<SidebarMenuButton
										asChild
										className={`hover:active:text-[#A667E4FF] hover:text-[#A667E4FF] hover:active:bg-[#E9D7FFFF] hover:bg-[#E9D7FFFF]`}
									>
										<Link
											className={`hover:active:text-[#A667E4FF] hover:text-[#A667E4FF] hover:active:bg-[#E9D7FFFF] hover:bg-[#E9D7FFFF]`}
											href={item.url}
										>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
									{item.title === 'My Links' ? (
										<SidebarMenuBadge className='text-[#A667E4FF] font-bold hover:active:text-[#A667E4FF] hover:text-[#A667E4FF] hover:active:bg-[#E9D7FFFF] hover:bg-[#E9D7FFFF] '>
											<p className='text-[#A667E4FF] font-bold hover:active:text-[#A667E4FF] hover:text-[#A667E4FF] hover:active:bg-[#E9D7FFFF] hover:bg-[#E9D7FFFF] '>
												24
											</p>
										</SidebarMenuBadge>
									) : null}
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
