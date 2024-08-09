export default function Header({ score, highScore }) {
	return (
		<>
			<header>
				<div className="header-inner-wrapper">
					<div className="title-heading">
						<h2>Memory Card Game</h2>
					</div>
					<div className="score-container">
						<p className="score">Current Score: {score}</p>
						<p className="score">Best Score: {highScore}</p>
					</div>
				</div>
			</header>
		</>
	);
}
