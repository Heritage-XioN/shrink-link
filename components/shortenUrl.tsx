'use client';
import { Field, FieldError, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';
import { startTransition, useActionState } from 'react';
import { shortenurl } from '@/actions/links';
import * as z from 'zod';
import { UrlSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

interface ShortenUrlProps {
	header?: string;
	placeholder?: string;
	buttonText?: string;
}

const ShortenUrl = ({ header, placeholder, buttonText }: ShortenUrlProps) => {
	const form = useForm<z.infer<typeof UrlSchema>>({
		resolver: zodResolver(UrlSchema),
		defaultValues: {
			original_url: '',
		},
	});

	const [state, formAction, isPending] = useActionState(shortenurl, undefined);
	return (
		<div className='flex justify-center items-center mb-12 mt-4'>
			<div className='md:hidden w-full shadow rounded-2xl px-8 py-12'>
				<div className='flex justify-center items-center mb-4'>
					<h1 className='text-[24px] leading-8 font-bold text-[#171A1FFF] text-center'>
						{header}
					</h1>
				</div>
				<div className='flex flex-row justify-center items-center'>
					<form
						className='w-full'
						onSubmit={form.handleSubmit((data) => {
							startTransition(() => {
								formAction(data);
							});
						})}
					>
						<FieldGroup className='flex'>
							<Controller
								name='original_url'
								control={form.control}
								render={({ field, fieldState }) => (
									<Field
										data-invalid={fieldState.invalid}
										className='grow shrink basis-auto'
									>
										<Input
											{...field}
											id='url'
											aria-invalid={fieldState.invalid}
											type='text'
											placeholder={placeholder}
											className='focus'
										/>
										{fieldState.invalid && (
											<FieldError
												className='grow shrink basis-auto text-center'
												errors={[fieldState.error]}
											/>
										)}
										<Button
											type='submit'
											className='hover:bg-[#A667E4FF] bg-[#A667E4FF] cursor-pointer'
										>
											{buttonText}
										</Button>
									</Field>
								)}
							/>
						</FieldGroup>
					</form>
				</div>
			</div>
			<div className='hidden md:block w-[70%] shadow rounded-2xl px-8 py-12'>
				<div className='flex justify-center items-center mb-4'>
					<h1 className='text-[24px] leading-8 font-bold text-[#171A1FFF] text-center'>
						{header}
					</h1>
				</div>
				<div className='flex flex-row justify-center items-center'>
					<form
						className='w-full'
						onSubmit={form.handleSubmit((data) => {
							startTransition(() => {
								formAction(data);
								form.reset();
							});
						})}
					>
						<FieldGroup className='flex'>
							<Controller
								name='original_url'
								control={form.control}
								render={({ field, fieldState }) => (
									<Field
										data-invalid={fieldState.invalid}
										className='grow shrink basis-full flex-col flex'
										orientation={'horizontal'}
									>
										<div className='grow shrink basis-full flex w-full gap-4'>
											<Input
												{...field}
												id='url'
												aria-invalid={fieldState.invalid}
												type='text'
												placeholder={placeholder}
												className='focus '
											/>
											<Button
												type='submit'
												className='hover:bg-[#A667E4FF] bg-[#A667E4FF] cursor-pointer'
												disabled={isPending}
											>
												{buttonText}
											</Button>
										</div>
										{fieldState.invalid && (
											<FieldError
												className='grow shrink basis-auto'
												errors={[fieldState.error]}
											/>
										)}
									</Field>
								)}
							/>
						</FieldGroup>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ShortenUrl;
