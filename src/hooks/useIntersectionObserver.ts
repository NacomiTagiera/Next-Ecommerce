import { type MutableRefObject, useEffect, useRef, useState } from "react";

type IntersectionObserverConfig = IntersectionObserverInit;

interface IntersectionObserverReturn<T extends HTMLElement> {
	/**
	 * Reference to any HTML element.
	 * The @T parameter is the type of the element we'll
	 * pass. It must extend from @HTMLElement type.
	 */
	ref: MutableRefObject<T | null>;
	visible: boolean;
}

export const useIntersectionObserver = <T extends HTMLElement>(
	config: IntersectionObserverConfig = {},
): IntersectionObserverReturn<T> => {
	const { threshold, root, rootMargin } = config;

	// Stores a reference to the HTML element that will be observed.
	const ref = useRef<T>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		// Here we're checking support and blocking execution
		// on server-side.
		const isClient = typeof window !== "undefined";
		if (!isClient) return;

		const isSupported = "IntersectionObserver" in window;
		if (!isSupported) {
			console.error("IntersectionObserver is not supported.");
			return;
		}

		// When the treshold value changes we'll start a new subscription.
		const listen: IntersectionObserverCallback = ([entry]) => {
			setVisible(entry!.isIntersecting);
		};

		const currentRef = ref.current;
		// Natively available API that supports detection.
		// It will call the listen function if it's near the element.
		const observer = new IntersectionObserver(listen, {
			threshold,
			root,
			rootMargin,
		});

		// We're starting observations.
		currentRef && observer.observe(currentRef);

		return () => {
			// We detach our listener.
			currentRef && observer.unobserve(currentRef);
		};
		// If any of the values change we'll start a new subscription.
	}, [threshold, root, rootMargin]);

	return { ref, visible };
};
