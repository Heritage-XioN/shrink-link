import HeroSectionOne from "@/components/hero-section-demo-1";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import SectionFour from "@/components/ui/section-four";
import SectionThree from "@/components/ui/section-three";
import SectionTwo from "@/components/ui/section-two";



export default function Home() {
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
