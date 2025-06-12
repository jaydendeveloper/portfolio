import Link from "next/link";

const Navbar = () => {
	const navItems = [
		{ name: "Projects", path: "#projects" },
		{ name: "Technologies", path: "#technologies" },
		{ name: "Socials", path: "#socials" },
	];

	return (
		<nav className="flex flex-row items-center justify-center gap-5">
			{navItems.map((item) => (
				<Link
					key={item.name}
					href={item.path}
					className="text-white text-xl hover:opacity-70 transition-opacity duration-300"
				>
					{item.name}
				</Link>
			))}
		</nav>
	);
};

export default Navbar;
