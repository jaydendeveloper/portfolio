import Image from "next/image";
import Link from "next/link";
import TitleBlock from "./TitleBlock";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";

const projects = [
	{
		title: "ChefConnect",
		description:
			"ChefConnect is your go-to platform for hiring talented private chefs for your events or becoming a chef and earning money hosting culinary experiences.",
		year: "2026",
		tags: ["Next.js", "TypeScript", "Tailwind CSS"],
		link: "https://chefconnect.hu",
		img: "/chefconnect.png",
	},
	{
		title: "Völgyesitea.hu ",
		description: "A webshop built for Völgyesitea, a Hungarian tea company.",
		year: "2025",
		tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Payload CMS"],
		link: "https://volgyesitea.hu",
		img: "/volgyesitea.png",
	},
	{
		title: "Kokovai Team Website",
		description: "A website built for Kokovai Team, a Hungarian gym.",
		year: "2026",
		tags: ["Next.js", "TypeScript", "Tailwind CSS"],
		link: "https://kokovai.hu",
		img: "/kokovai.png",
	},
	{
		title: "GTA:SA Guesser",
		description:
			"A web application that allows users to guess locations from GTA: San Andreas in a GeoGuesser style.",
		year: "2022-2023",
		tags: ["Next.js", "JavaScript", "Tailwind CSS", "Firebase"],
		link: "https://gtasaguesser.app",
		img: "/gtasaguesser.png",
	},
];

const Projects = () => {
	return (
		<div>
			<TitleBlock title="Projects" />
			<div className="text-center mb-6">
				<h2 className="md:text-5xl text-3xl font-semibold tracking-tighter">
					Featured projects
				</h2>
			</div>
			<div className="grid md:grid-cols-2 grid-cols-1 gap-6">
				{projects.map((project, index) => (
					<Card key={index}>
						<CardHeader>
							<Link
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src={project.img}
									alt={project.title}
									width={500}
									height={300}
									className="w-full h-48 object-cover rounded-t-lg"
								/>
							</Link>
							<CardTitle className="ml-2 mt-2">{project.title}</CardTitle>
							<CardDescription className="ml-2">{project.year}</CardDescription>
							<CardDescription className="ml-2">
								{project.description}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-2">
								{project.tags.map((tag, tagIndex) => (
									<Badge key={tagIndex}>{tag}</Badge>
								))}
							</div>
						</CardContent>
						<CardFooter className="mt-auto">
							<Link
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button>Website</Button>
							</Link>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Projects;
