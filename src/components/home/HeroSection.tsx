import { motion } from 'framer-motion'
import {HERO_IMG} from '../../constants/links.ts'
import {ArrowUpRight} from 'lucide-react'

const Hero = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full px-5 md:h-screen h-full grid md:flex md:mb-0 mb-20 justify-center gap-5 flex-row">
			<section className="md:w-1/2 md:mt-54 mt-42 w-full md:h-full h-auto flex-row text-center">
				<h1 className="md:text-5xl text-4xl font-bold text-gray-700">Welcome to Aks where simplicity meets art.</h1>
				<p className="font-light text-center mt-5">Explore our collection of handcrafted furniture, made with premium materials.</p>
				<div className="flex justify-center mt-5">	
					<button className="rounded-md hover:bg-gray-700 border border-gray-700 hover:text-white text-gray-700 p-2 cursor-pointer flex gap-2 items-center">Catalog <ArrowUpRight /></button>
				</div>
			</section>
			<section className="md:w-1/2 w-full h-screen mt-40 md:flex hidden justify-center text-center">
				<img className="rounded-md md:h-1/2 h-full" src={HERO_IMG} alt="" />
			</section>
		</motion.div>
	)
}

export default Hero