'use client';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldSeparator,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import {  loginSchema } from '@/lib/validation';
import { Eye, EyeOff } from 'lucide-react';
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group';
import { startTransition, useActionState } from 'react';
import { handlelogin } from '@/actions/auth';

export function LoginForm({
	className,
	...props
}: React.ComponentProps<'div'>) {
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			username: '',
			password: '',
		},
	});
	const [isVisible, setisVisible] = React.useState(false);

	const onClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		setisVisible((prev) => (prev = !isVisible));
	};

	const [state, formAction, isPending] = useActionState(handlelogin, undefined);

	return (
		<div className={cn('flex flex-col gap-6', className)} {...props}>
			<Card>
				<CardHeader className='text-center'>
					<CardTitle className='text-xl font-black text-[#A667E4FF]'>
						Welcome back
					</CardTitle>
					<CardDescription className='text-[#A667E4FF] font-bold'>
						Login with your Apple or Google account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						id='login'
						onSubmit={form.handleSubmit((data) => {
							startTransition(() => {
								formAction(data);
							});
						})}
					>
						<FieldGroup>
							<Field>
								<Button
									variant='outline'
									type='button'
									className='cursor-pointer hover:bg-[#A667E41A]'
								>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
										<path
											d='M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701'
											fill='currentColor'
										/>
									</svg>
									Login with Apple
								</Button>
								<Button
									variant='outline'
									type='button'
									className='cursor-pointer hover:bg-[#A667E41A]'
								>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
										<path
											d='M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z'
											fill='currentColor'
										/>
									</svg>
									Login with Google
								</Button>
							</Field>
							<FieldSeparator className='*:data-[slot=field-separator-content]:bg-card '>
								<span className='text-[#A667E4FF] font-bold'>
									Or continue with
								</span>
							</FieldSeparator>
							{state && (
								<div
									className={`${
										state.status === 'success'
											? 'bg-[#dcfce7] border-l-3 border-l-[#22c55e] border-r-3 border-r-[#22c55e]'
											: 'bg-[#fee2e2] border-l-3 border-l-[#dc2626] border-r-3 border-r-[#dc2626]'
									}`}
								>
									<p
										className={`text-center text-[14px] font-semibold ${
											state.status === 'success'
												? 'text-[#22c55e]'
												: 'text-[#dc2626]'
										}`}
									>
										{state.message}
									</p>
								</div>
							)}
							<Controller
								name='username'
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor='email'>Email</FieldLabel>
										<Input
											{...field}
											id='email'
											aria-invalid={fieldState.invalid}
											type='email'
											placeholder='m@example.com'
											className='focus'
										/>
										{fieldState.invalid && (
											<FieldError errors={[fieldState.error]} />
										)}
									</Field>
								)}
							/>
							<Controller
								name='password'
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor='password'>Password</FieldLabel>
										<InputGroup className='focus'>
											<InputGroupInput
												{...field}
												id='password'
												aria-invalid={fieldState.invalid}
												type={isVisible ? 'text' : 'password'}
												placeholder='Pass123@example'
											/>
											<InputGroupAddon className='' align='inline-end'>
												<button onClick={onClick}>
													{isVisible ? <Eye /> : <EyeOff />}
												</button>
											</InputGroupAddon>
										</InputGroup>
										{fieldState.invalid && (
											<FieldError errors={[fieldState.error]} />
										)}
									</Field>
								)}
							/>
							<Field>
								<Button
									type='submit'
									className='hover:bg-[#A667E4FF] bg-[#A667E4FF] cursor-pointer'
									disabled={isPending}
								>
									{isPending ? 'login...' : 'login'}
								</Button>
								<FieldDescription className='text-center'>
									Don&apos;t have an account?{' '}
									<Link href='/auth/signup' className='text-[#A667E4FF]'>
										Sign up
									</Link>
								</FieldDescription>
							</Field>
						</FieldGroup>
					</form>
				</CardContent>
			</Card>
			<FieldDescription className='px-6 text-center'>
				By clicking continue, you agree to our{' '}
				<Link href='#' className='text-[#A667E4FF]'>
					Terms of Service
				</Link>{' '}
				and{' '}
				<Link href='#' className='text-[#A667E4FF]'>
					Privacy Policy
				</Link>
				.
			</FieldDescription>
		</div>
	);
}
