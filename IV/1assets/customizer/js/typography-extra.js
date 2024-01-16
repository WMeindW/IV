wp.customize.sectionConstructor['typography_extra_section'] = wp.customize.Section.extend({
	// No events for this type of subsection-mid.
	attachEvents: () => null,
	// Always make the subsection-mid active.
	isContextuallyActive: () => true,
});