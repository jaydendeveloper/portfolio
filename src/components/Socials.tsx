import Image from "next/image";
import TitleBlock from "./TitleBlock";

const Socials = () => {
	const socials = [
		{
			name: "E-mail",
			link: "mailto:contact.jaydendev@gmail.com",
			image: "https://s.magecdn.com/social/tc-mail.svg",
		},
		{
			name: "GitHub",
			link: "https://github.com/jaydendeveloper",
			image: "https://s.magecdn.com/social/tc-github.svg",
		},

		{
			name: "LinkedIn",
			link: "https://www.linkedin.com/in/patrik-gyalog-63105b370/",
			image: "https://s.magecdn.com/social/tc-linkedin.svg",
		},
		{
			name: "Discord",
			link: "https://discord.com/users/414170037478490123",
			image: "https://s.magecdn.com/social/tc-discord.svg",
		},
	];

	return (
		<div className="mb-16">
			<TitleBlock title="Socials" />

			<div className="text-center mb-6">
				<h2 className="md:text-5xl text-3xl font-semibold tracking-tighter">
					Get in touch
				</h2>
			</div>
			<div className="text-2xl leading-[26px] text-balance font-sans text-center ">
				{/* github and email */}
				<span className="opacity-80">
					Lets connect! Feel free to reach out to me via{" "}
				</span>
				<div className="flex justify-center gap-4 mt-4">
					{socials.map((social) => (
						<a
							key={social.name}
							href={social.link}
							target="_blank"
							rel="noopener noreferrer"
							className="opacity-100 text-white underline hover:opacity-80 transition-opacity duration-300"
						>
							<Image
								src={social.image}
								alt={social.name}
								width={48}
								height={48}
								className="rounded-full"
							/>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Socials;
