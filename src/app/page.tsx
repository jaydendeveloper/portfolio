import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import Tech from "@/components/Tech";

export default function Home() {
	return (
		<div className="flex justify-center font-sans py-12 text-white dark">
			<div className="xl:max-w-[35%] max-w-[80%] flex flex-col gap-10 space-y-4">
				<Navbar />
				<Hero />
				<About />
				<Projects />
				<Tech />
				<Socials />
			</div>
		</div>
	);
}
