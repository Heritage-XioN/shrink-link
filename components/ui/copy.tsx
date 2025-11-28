'use client';
import { Copy } from 'lucide-react';
import React from 'react';

const CopyIcon: React.FC = () => {
	const textToShare = 'Hello! Check out https://example.com';

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(textToShare);
			alert('Copied to clipboard!');
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};

	
	return (
		<div className='flex justify-center items-center w-10 h-10 bg-transparent cursor-pointer  hover:active:bg-[#E9D7FFFF] hover:bg-[#E9D7FFFF] rounded'>
			<Copy
				className='w-6 h-6 text-[#A667E4FF] font-bold hover:active:text-[#A667E4FF] hover:text-[#A667E4FF]'
				onClick={handleCopy}
			/>
		</div>
	);
};

export default CopyIcon;
