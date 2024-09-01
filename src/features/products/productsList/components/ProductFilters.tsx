"use client";

import { useState } from "react";
import { BsFunnel } from "react-icons/bs";

import dynamic from "next/dynamic";

import { Button } from "@/components/UI/Button";

const FiltersDialog = dynamic(() => import("./FiltersDialog").then((mod) => mod.FiltersDialog));

export const ProductFilters = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			{open && <FiltersDialog open={open} onClose={() => setOpen(false)} />}
			<Button
				type="button"
				aria-label="Open filters dialog"
				variant="text"
				leadingIcon={BsFunnel}
				className="p-0 text-zinc-700 hover:text-zinc-900"
				onClick={() => setOpen(true)}
			>
				Filters
			</Button>
		</>
	);
};
