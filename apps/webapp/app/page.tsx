"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'
import { ArrowRight, DiscIcon as Discord, Github, Twitter } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import FeatureSteps from '@/components/FeatureSteps'
import SearchGamesBar from '@/components/SearchGamesBar'
import HomeHeroPage from '@/components/HeroLandingPage'
import GameInfoCard from '@/components/GameCardComponent/gameinfocard'

export default function Home() {
	const [email, setEmail] = useState('')

	// Calculate time until launch (example: March 1st, 2025)
	const launchDate = new Date('2025-03-01').getTime()
	const now = new Date().getTime()
	const distance = launchDate - now
	const days = Math.floor(distance / (1000 * 60 * 60 * 24))
	const stepsData = [
		{
			stepNumber: 1,
			title: 'Game Visibility',
			description: 'Showcase your game to a passionate and growingStellar community.',
		},
		{
			stepNumber: 2,
			title: 'Community Insights',
			description:
				'Leverage real-time reviews,ratings, and user feedback to refine your game and boost player satisfaction.',
		},
		{
			stepNumber: 3,
			title: 'Reputation Building',
			description:
				'Utilize Arcadis features like community votes, tutorials, and achievements to establish your game as a trusted and popular title.',
		},
		{
			stepNumber: 4,
			title: 'Crowdfunding',
			description:
				'Access crowdfunding tools like new integration to fund game updates or new features while gaining community support.',
		},
		{
			stepNumber: 5,
			title: 'Growth and Promotion',
			description:
				'Increase player acquisition, retention, and in-game engagement while leveraging the platform to promote your game effectively.',
		},
	]
	const handleCtaClick = () => {
		console.log('CTA Clicked!')
	}

	return (
		<main className="min-h-screen relative overflow-hidden bg-[#070B1D]">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

			{/* Floating elements */}
			<div className="absolute inset-0 overflow-hidden">
				{[...Array(3)].map((_, i) => (
					<motion.div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={i}
						className="absolute w-[300px] h-[300px] rounded-full bg-blue-500/10"
						animate={{
							x: [0, 100, 0],
							y: [0, 50, 0],
							scale: [1, 1.1, 1],
						}}
						transition={{
							duration: 15,
							repeat: Number.POSITIVE_INFINITY,
							delay: i * 2,
						}}
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
					/>
				))}
			</div>

			<div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen gap-12">
				{/* Main content */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-4xl mx-auto text-center space-y-8"
				>
					<div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full backdrop-blur-sm border border-blue-500/20 text-blue-300 mb-4">
						{days} days until launch
					</div>

					<h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
						Coming Soon{' '}
						<span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#93C5FD] text-transparent bg-clip-text">
							ARCADIS Gaming
						</span>
					</h1>

					<p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
						Get ready for the next evolution in blockchain gaming. Join thousands of players in
						shaping the future of gaming.
					</p>

					{/* Newsletter signup */}
					<div className="max-w-md mx-auto mt-12">
						<div className="flex gap-2">
							<Input
								type="email"
								placeholder="Enter your email"
								className="bg-white/5 border-white/10"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Button className="bg-blue-600 hover:bg-blue-700">
								Notify Me <ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</div>
						<p className="text-sm text-gray-500 mt-2">Be the first to know when we launch</p>
					</div>
				</motion.div>

				{/* Stats */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full mt-12"
				>
					{[
						{ label: 'Pre-registered Players', value: '10,000+' },
						{ label: 'Games at Launch', value: '50+' },
						{ label: 'Total Prize Pool', value: '$1M+' },
					].map((stat, i) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
							className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
						>
							<div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
							<div className="text-gray-400">{stat.label}</div>
						</div>
					))}
				</motion.div>
				<SearchGamesBar />
				<FeatureSteps steps={stepsData} ctaText="Register Your Game" onCtaClick={handleCtaClick} />

				{/* Stats */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl  w-full mt-12"
				>
					{[
						{
							icon: '/assets/images/teal-icon.svg',
							headline: 'Curated Games',
							description:
								'Discover and explore handpicked Stellar games with in-depth reviews, ratings, and personalized recommendations tailored for you.',
						},
						{
							icon: '/assets/images/purple-icon.svg',
							headline: 'Community Rewards',
							description:
								' Earn tokens, NFTs, and reputation for playing, reviewing, voting, and contributing.',
						},
						{
							icon: '/assets/images/pink-icon.svg',
							headline: 'Support Innovation',
							description: 'Help developers crowdfund and grow their games with your engagement.',
						},
					].map((feature, i) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
							className=" p-6 rounded-xl backdrop-blur-lg relative
							bg-[#3c07646A] 
							bg-[linear-gradient(90deg,rgba(255,255,255,0)_10%,rgba(255,255,255,0.08)_50%,rgba(255,255,255,0)_90%)]
							shadow-[0px_2px_5px_rgba(0,0,0,0.1)]
							text-white w-auto"
						>
							<div className="w-full flex items-center gap-x-4">
								<Image
									src={feature.icon || ''}
									alt={feature.headline}
									width={48}
									height={48}
									quality={90}
								/>
								<p className="text-[1.75rem] font-bold">{feature.headline}</p>
							</div>
							<p className="font-normal text-[0.95rem] mt-[1rem] text-left">
								{feature.description}
							</p>
						</div>
					))}
				</motion.div>
				{/* Social links */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="flex gap-6 mt-12"
				>
					{[
						{ icon: Discord, label: 'Discord' },
						{ icon: Twitter, label: 'Twitter' },
						{ icon: Github, label: 'Github' },
					].map((social, i) => (
						<Button
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
							variant="ghost"
							size="icon"
							className="text-gray-400 hover:text-white hover:bg-white/10"
						>
							<social.icon className="h-5 w-5" />
							<span className="sr-only">{social.label}</span>
						</Button>
					))}
				</motion.div>
			</div>
			<HomeHeroPage/>
			<GameInfoCard
  image="https://media.istockphoto.com/id/1460761187/photo/yeaaaah-i-have-won-the-match.jpg?s=612x612&w=0&k=20&c=-oVpkorWLs6ZFcFuiJX3rT4ip4IPKp31pPp7e_4Nk9E="
  title="Eternal Legends"
  developer={{ name: "Blockchain Gaming Inc", url: "#", logo: "data:image/jpeg;base64,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" }}
  rating={9}
  status="active"
  description="Enter a persistent world where every player's actions leave a lasting impact. Forge alliances, build"
  players={800000}
  community={1500000}
  categories={["MMORPG", "BLOCKCHAIN", "FANTASY"]}
/>

		</main>
	)

}
