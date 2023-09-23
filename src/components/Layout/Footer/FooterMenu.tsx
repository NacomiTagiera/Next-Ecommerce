import { ActiveLink } from "@/components/Shared/ActiveLink";

type FooterMenuProps = {
	header: string;
	items: {
		slug: string;
		name: string;
	}[];
};

export const FooterMenu = ({ header, items }: FooterMenuProps) => {
	return (
		<>
			<h5 className="font-semibold leading-6 text-black">{header}</h5>
			<ul className="mt-5 space-y-4">
				{items.map((item) => (
					<li key={item.slug}>
						<ActiveLink
							href={`/${item.slug}`}
							className="hover:text-black hover:underline hover:underline-offset-4"
							activeClassName="text-black"
						>
							{item.name}
						</ActiveLink>
					</li>
				))}
			</ul>
		</>
	);
};
