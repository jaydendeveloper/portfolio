import Image from "next/image";
import Link from "next/link";
import TitleBlock from "./TitleBlock";

const Tech = () => {
	const technologies = [
		{
			name: "Next.js",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
			year: "since 2022",
			link: "https://nextjs.org/",
		},
		/* 		{
			name: "React",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			year: "2022 - Present",
			link: "https://react.dev",
		}, */
		{
			name: "Expo",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
			year: "since 2026",
			link: "https://expo.dev",
		},
		{
			name: "TypeScript",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
			year: "since 2023",
			link: "https://www.typescriptlang.org/",
		},
		{
			name: "JavaScript",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
			year: "since 2020",
			link: "https://www.javascript.com/",
		},
		/* 		{
			name: "Tailwind CSS",
			icon: "/tailwindcss-icon.svg",
			year: "2022 - Present",
			link: "https://tailwindcss.com/",
		}, */
		{
			name: "Java Spring Boot",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
			year: "since 2026",
			link: "https://spring.io/projects/spring-boot",
		},
		{
			name: "Node.js",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
			year: "since 2022",
			link: "https://nodejs.org/",
		},
		{
			name: "PostgreSQL",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
			year: "since 2023",
			link: "https://www.postgresql.org/",
		},
		{
			name: "Git",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
			year: "since 2020",
			link: "https://git-scm.com/",
		},
		{
			name: "Debian",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg",
			year: "since 2020",
			link: "https://www.debian.org/",
		},
		{
			name: "Nginx",
			icon: "/nginx-icon.svg",
			year: "since 2023",
			link: "https://nginx.org",
		},
	];

	return (
		<div>
			<TitleBlock title="Technologies" />

			<div className="text-center mb-6">
				<h2 className="md:text-5xl text-3xl font-semibold tracking-tighter">
					Technologies I work with
				</h2>
			</div>

			<div className="grid md:grid-cols-2 grid-cols-1 gap-6">
				{technologies.map((tech, index) => (
					<div
						key={index}
						className="bg-card border p-4 rounded-lg flex items-center space-x-4"
					>
						<Image width={48} height={48} src={tech.icon} alt={tech.name} />
						<div>
							<Link href={tech.link} target="_blank" rel="noopener noreferrer">
								<h3 className="text-xl font-semibold hover:underline">
									{tech.name}
								</h3>
							</Link>
							<p className="text-sm text-gray-400">{tech.year}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Tech;
