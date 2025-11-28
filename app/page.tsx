"use cache"
import HeroSectionOne from "@/components/hero-section-demo-1";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import SectionFour from "@/components/section-four";
import SectionThree from "@/components/section-three";
import SectionTwo from "@/components/section-two";



export default async function Home() {
  return (
		<div className=''>
			<Navbar />
			<HeroSectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
			<Footer />
		</div>
	);
}
