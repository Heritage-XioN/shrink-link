'use client';
import  Image  from 'next/image';
import { motion } from 'motion/react';

export default function HeroSectionOne() {
	return (
		<div className='relative mx-auto mt-15 mb-10 flex max-w-7xl flex-col items-center justify-center'>
			<div className='md:flex md:flex-wrap px-4 py-10 md:py-20'>
				<div className='md:grow md:shrink md:basis-auto md:w-1/2'>
					<h1 className='md:hidden relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300'>
						{`Shorten. Share. Track.`.split(' ').map((word, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 0, filter: 'blur(4px)', y: 10 }}
								animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
								transition={{
									duration: 0.3,
									delay: index * 0.1,
									ease: 'easeInOut',
								}}
								className='mr-2 inline-block'
							>
								{word}
							</motion.span>
						))}
					</h1>
					<h1 className='hidden md:block relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300'>
						{`Shorten Your Links, Expsnd Your Reach`
							.split(' ')
							.map((word, index) => (
								<motion.span
									key={index}
									initial={{ opacity: 0, filter: 'blur(4px)', y: 10 }}
									animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
									transition={{
										duration: 0.3,
										delay: index * 0.1,
										ease: 'easeInOut',
									}}
									className='mr-2 inline-block'
								>
									{word}
								</motion.span>
							))}
					</h1>
					<motion.p
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						transition={{
							duration: 0.3,
							delay: 0.8,
						}}
						className='md:hidden relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400'
					>
						{'Your links, beautifully condensed.'}
					</motion.p>
					<motion.p
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						transition={{
							duration: 0.3,
							delay: 0.8,
						}}
						className='hidden md:block relative z-10 mx-auto max-w-xl py-4 lg:py-2 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400'
					>
						{
							'Transform long, cumbersome URLs into neat, shareable links instantly.'
						}
					</motion.p>
					<motion.div
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						transition={{
							duration: 0.3,
							delay: 1,
						}}
						className='relative z-10 mt-4 lg:mt-1 flex flex-wrap items-center justify-center gap-4'
					>
						<button className='w-60 transform rounded-lg bg-[#A667E4FF] px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 gradient dark:bg-white dark:text-black dark:hover:bg-gray-200'>
							Explore Now
						</button>
						<button className='w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900'>
							Contact Us
						</button>
					</motion.div>
				</div>
				<div className='md:grow md:shrink md:basis-auto md:w-1/2'>
					<motion.div
						initial={{
							opacity: 0,
							y: 10,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.3,
							delay: 1.2,
						}}
						className='relative z-10 mt-5 lg:mt-0 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900'
					>
						<div className='w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700'>
							<Image
								src='https://assets.aceternity.com/pro/aceternity-landing.webp'
								alt='Landing page preview'
								className='aspect-[16/9] h-auto w-full object-cover'
								height={1000}
								width={1000}
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
