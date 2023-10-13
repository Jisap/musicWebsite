

const SectionHeader = ({ pretitle, title }) => {
	return (
		<header>
			<h3 className="pretitle text-center">{pretitle}</h3>
			<h2 className="h2 text-center mb-8">{title}</h2>
		</header>
	)
}

export default SectionHeader