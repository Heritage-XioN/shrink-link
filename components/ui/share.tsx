'use client';
import { Share2 } from 'lucide-react';
import React from 'react';

const ShareIcon: React.FC = () => {
	const textToShare = 'Hello! Check out https://example.com';

	const handleShare = async () => {
		if (navigator.share) {
			try {
				await navigator.share({
					title: 'Sharing Example',
					text: textToShare,
					url: 'https://example.com',
				});
				console.log('Content shared successfully!');
			} catch (err) {
				console.error('Error sharing:', err);
			}
		} else {
			alert('Web Share API not supported on this browser.');
		}
	};

	return (
		<div className='flex justify-center items-center w-10 h-10 bg-transparent cursor-pointer  hover:active:bg-[#E9D7FFFF] hover:bg-[#E9D7FFFF] rounded'>
			<Share2
				className='w-6 h-6 text-[#A667E4FF] font-bold hover:active:text-[#A667E4FF] hover:text-[#A667E4FF]'
				onClick={handleShare}
			/>
		</div>
	);
};

export default ShareIcon;
