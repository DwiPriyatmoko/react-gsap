export const animateWithGsapTimeline = (
	timeline,
	rotationRef,
	rotationState,
	firstTarget,
	secondTarget,
	animationProps
) => {
	// First, animate the rotation
	timeline.to(rotationRef.current.rotation, {
		y: rotationState,
		duration: 1,
		ease: 'power2.inOut',
	});

	// Then animate both views simultaneously
	timeline.to(
		firstTarget,
		{
			...animationProps,
			ease: 'power2.inOut',
		},
		'<'
	);

	timeline.to(
		secondTarget,
		{
			...animationProps,
			ease: 'power2.inOut',
		},
		'<'
	);
};
