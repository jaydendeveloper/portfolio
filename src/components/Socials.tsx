import TitleBlock from "./TitleBlock";

const Socials = () => {
	return (
		<div className="mb-16">
			<TitleBlock title="Socials" />

			<div className="text-center mb-6">
				<h2 className="md:text-5xl text-3xl font-semibold tracking-tighter">
					Get in touch
				</h2>
			</div>
			<p className="text-2xl leading-[26px] text-balance font-sans text-center ">
				{/* github and email */}
				<span className="opacity-80">
					Lets connect! Feel free to reach out to me via{" "}
				</span>
				<a
					href="mailto:contact.jaydendev@gmail.com"
					className="opacity-100 text-white underline hover:opacity-80 transition-opacity duration-300"
					target="_blank"
					rel="noopener noreferrer"
				>
					E-mail
				</a>{" "}
				<span className="opacity-80">or find me on </span>
				<a
					href="https://github.com/jaydendeveloper"
					className="opacity-100 underline hover:opacity-80 transition-opacity duration-300"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>
				!
			</p>
		</div>
	);
};

export default Socials;
