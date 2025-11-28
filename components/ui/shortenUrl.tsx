import {
	Field,
	FieldGroup,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from './button';

const ShortenUrl = () => {
	return (
		<div className='flex justify-center items-center'>
			<div className='md:hidden w-full shadow rounded-2xl px-8 py-12'>
				<div className='flex justify-center items-center mb-4'>
					<h1 className='text-[24px] leading-8 font-bold text-[#171A1FFF] text-center'>
						Shorten Your Link
					</h1>
				</div>
				<div className='flex flex-row justify-center items-center'>
					<form className='w-full'>
						<FieldGroup className='flex'>
							<Field
								className='grow shrink basis-auto'
								
							>
								<Input
									id='email'
									type='text'
									placeholder='https://example.com/very/long/url'
									className='focus'
									required
								/>
								<Button
									type='submit'
									className='hover:bg-[#A667E4FF] bg-[#A667E4FF] cursor-pointer'
								>
									Shorten
								</Button>
							</Field>
						</FieldGroup>
					</form>
				</div>
			</div>
			<div className='hidden md:block w-[70%] shadow rounded-2xl px-8 py-12'>
				<div className='flex justify-center items-center mb-4'>
					<h1 className='text-[24px] leading-8 font-bold text-[#171A1FFF] text-center'>
						Shorten Your Link
					</h1>
				</div>
				<div className='flex flex-row justify-center items-center'>
					<form className='w-full'>
						<FieldGroup className='flex'>
							<Field
								className='grow shrink basis-auto'
								orientation={'horizontal'}
							>
								<Input
									id='email'
									type='text'
									placeholder='https://example.com/very/long/url'
									className='focus'
									required
								/>
								<Button
									type='submit'
									className='hover:bg-[#A667E4FF] bg-[#A667E4FF] cursor-pointer'
								>
									Shorten
								</Button>
							</Field>
						</FieldGroup>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ShortenUrl;
