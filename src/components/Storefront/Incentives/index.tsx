import { incentives } from "@/lib/constants";

import { SectionHeader } from "../SectionHeader";

import { Incentive } from "./Incentive";

export const Incentives = () => (
	<section
		aria-labelledby="incentives-section"
		className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4"
	>
		<div className="mx-auto max-w-2xl px-4 lg:max-w-none">
			<SectionHeader
				title="We built our business on customer service"
				description="We're committed to providing the best experience possible. We're always here for you to help, no matter what."
			/>
			<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
				{incentives.map((incentive) => (
					<Incentive key={incentive.name} {...incentive} />
				))}
			</div>
		</div>
	</section>
);
