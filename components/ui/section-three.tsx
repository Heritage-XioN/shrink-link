import { ClipboardPaste, Copy, Zap, Globe } from 'lucide-react';

const SectionThree = () => {
	return (
		<div className='px-8 mb-96 md:py-4 md:px-20 md:my-10'>
			<div className='w-full'>
				<div className='grow shrink basis-auto my-4'>
					<h1 className='text-2xl font-bold leading-[30px] text-[#171A1FFF] text-center'>
						How It Works
					</h1>
				</div>
				<div className='md:hidden'>
					<div className='flex gap-4 my-4'>
						<div className='grow shrink basis-auto'>
							<ClipboardPaste className='w-6 h-6 text-[#A667E4FF]' />
						</div>
						<div className='grow shrink basis-auto'>
							<p className='text-[16px] leading-6 font-medium'>
								Paste your long URL into the field above.
							</p>
						</div>
					</div>
					<div className='flex gap-4 my-4'>
						<div className='grow shrink basis-auto'>
							<Zap className='w-6 h-6 text-[#A667E4FF]' />
						</div>
						<div className='grow shrink basis-auto'>
							<p className='text-[16px] leading-6 font-medium'>
								Click{' '}
								<span className='text-[#A667E4FF] font-bold'>Shorten</span> to
								generate your new compact link.
							</p>
						</div>
					</div>
					<div className='flex gap-4 my-4'>
						<div className='grow shrink basis-auto'>
							<Copy className='w-6 h-6 text-[#A667E4FF]' />
						</div>
						<div className='grow shrink basis-auto'>
							<p className='text-[16px] leading-6 font-medium'>
								Copy and share your shortened link anywhere!
							</p>
						</div>
					</div>
				</div>
				<div className='my-8 hidden md:flex flex-wrap flex-row gap-8 w-full px-4'>
					<div className='grow shrink basis-0 flex flex-wrap flex-col gap-4 my-4 shadow rounded-2xl px-6 py-12'>
						<div className='flex flex-wrap flex-col'>
							<div className='flex justify-center items-center my-4 grow shrink basis-auto'>
								<div className='w-12 h-12 rounded-full bg-[#A667E41A] flex items-center justify-center'>
									<h1 className='text-[18px] leading-7 font-bold text-[#A667E4FF] text-center'>
										1
									</h1>
								</div>
							</div>
							<div className='grow shrink basis-auto flex items-center justify-center'>
								<ClipboardPaste className='w-8 h-8 text-[#A667E4FF]' />
							</div>
						</div>
						<div className='grow shrink basis-auto'>
							<h1 className='text-[20px] leading-6 font-semibold text-center '>
								Paste Long URL
							</h1>
						</div>
						<div className='grow shrink basis-auto'>
							<p className='text-[16px] leading-6 font-normal text-center'>
								Copy your lengthy link and paste it into the input field above.
							</p>
						</div>
					</div>
					<div className='grow shrink basis-0 flex flex-wrap flex-col gap-4 my-4 shadow rounded-2xl px-6 py-12'>
						<div className='flex flex-wrap flex-col'>
							<div className='flex justify-center items-center my-4 grow shrink basis-auto'>
								<div className='w-12 h-12 rounded-full bg-[#A667E41A] flex items-center justify-center'>
									<h1 className='text-[18px] leading-7 font-bold text-[#A667E4FF] text-center'>
										2
									</h1>
								</div>
							</div>
							<div className='grow shrink basis-auto flex items-center justify-center'>
								<Zap className='w-8 h-8 text-[#A667E4FF]' />
							</div>
						</div>
						<div className='grow shrink basis-auto'>
							<h1 className='text-[20px] leading-6 font-semibold text-center '>
								Click Shorten
							</h1>
						</div>
						<div className='grow shrink basis-auto'>
							<p className='text-[16px] leading-6 font-normal text-center'>
								Hit the Shorten button to instantly generate a compact URL
							</p>
						</div>
					</div>
					<div className='grow shrink basis-0 flex flex-wrap flex-col gap-4 my-4 shadow rounded-2xl px-6 py-12'>
						<div className='flex flex-wrap flex-col'>
							<div className='flex justify-center items-center my-4 grow shrink basis-auto'>
								<div className='w-12 h-12 rounded-full bg-[#A667E41A] flex items-center justify-center'>
									<h1 className='text-[18px] leading-7 font-bold text-[#A667E4FF] text-center'>
										3
									</h1>
								</div>
							</div>
							<div className='grow shrink basis-auto flex items-center justify-center'>
								<Globe className='w-8 h-8 text-[#A667E4FF]' />
							</div>
						</div>
						<div className='grow shrink basis-auto'>
							<h1 className='text-[20px] leading-6 font-semibold text-center '>
								Share & Track
							</h1>
						</div>
						<div className='grow shrink basis-auto'>
							<p className='text-[16px] leading-6 font-normal text-center'>
								Copy your new link and share it anywhere. Monitor its
								performance on your dashboard.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionThree;
