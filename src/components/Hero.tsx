import Image from "next/image";

const Hero = () => {
	return (
		<div>
			<div className="flex flex-col text-white w-full">
				<div className="flex flex-row items-center w-full">
					<div>
						<h1 className="text-6xl font-bold mb-2">Hi! I&apos;m Patrik 👋</h1>
						<p className="md:text-2xl text-xl mb-4 md:w-[450px] opacity-90 line-he">
							Web Developer and Software Engineer based in Hungary.
						</p>
					</div>
					<Image
						src={"/me.jpg"}
						alt="Patrik Gyalog"
						width={140}
						height={140}
						className="rounded-full mb-4 w-[140px] h-[140px] object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
