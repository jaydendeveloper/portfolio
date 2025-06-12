const TitleBlock = ({ title }: { title: string }) => {
	return (
		<div
			id={title.toLowerCase().replace(/\s+/g, "-")}
			className="bg-foreground text-background px-3 py-2 text-sm rounded-lg shadow-md w-fit m-auto mb-2"
		>
			{title}
		</div>
	);
};

export default TitleBlock;
