import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

export const useMobileMenu = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		setMobileMenuOpen(false);
	}, [pathname]);

	return { mobileMenuOpen, setMobileMenuOpen };
};
