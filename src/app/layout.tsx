import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Portfolio | Patrik Gyalog",
	description: "A portfolio website showcasing my work and skills",
	openGraph: {
		title: "Portfolio",
		description: "A portfolio showcasing my work and skills",
		url: "https://jaydendev.hu",
		siteName: "Portfolio | Patrik Gyalog",
		type: "website",
		locale: "en_US",
	},
	robots: {
		index: true,
		follow: true,
	},
	themeColor: "#000000",
	keywords: [
		"portfolio",
		"web development",
		"software engineering",
		"Patrik Gyalog",
		"Gyalog Patrik",
		"Hungary",
		"Next.js",
		"React",
		"TypeScript",
		"Website",
		"Web Design",
		"Web Developer",
		"Software Engineer",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
