import React from 'react'; //rfc:react function component

import ImageHero from 'assets/images/img-hero.jpg';
import ImageHero_ from 'assets/images/img-hero-frame.jpg';
import IconTraveler from 'assets/images/icons/icon-traveler.svg';
import IconCities from 'assets/images/icons/icon-cities.svg';
import IconTreasure from 'assets/images/icons/icon-treasure.svg';

import Button from 'elements/Button';

import formatNumber from 'utility/formatNumber';

export default function Hero(props) {
	function showMostPicked() {
		window.scrollTo({
			top: props.refMostPicked.current.offsetTop - 30,
			behavior: 'smooth',
		});
	}

	return (
		<section className="container pt-4">
			<div className="row align-items-center">
				<div className="col-auto pr-5" style={{ width: 530 }}>
					<h1 className="font-weight-bold line-height-1 mb-3">
						Forget Busy Work, <br />
						Start Next Vacation
					</h1>
					<p
						className="mb-4 font-weight-light text-gray-500 w-75"
						style={{ lineHeight: '170%' }}>
						We provide what you need to enjoy your holiday with family. Time to
						make another memorable moments.
					</p>
					<Button
						className="btn px-5"
						hasShadow
						isPrimary
						onClick={showMostPicked}>
						Show Me Now
					</Button>
					<div className="row" style={{ marginTop: 60 }}>
						<div className="col-auto" style={{ marginRight: 35 }}>
							<img
								width="36"
								height="36"
								src={IconTraveler}
								alt={`${props.data.travelers} travelers`}
							/>
							<h6 className="mt-3" style={{ fontWeight: 600 }}>
								{formatNumber(props.data.travelers)}{' '}
								<span className="text-gray-500 font-weight-light">
									travelers
								</span>
							</h6>
						</div>
						<div className="col-auto" style={{ marginRight: 35 }}>
							<img
								width="36"
								height="36"
								src={IconTreasure}
								alt={`${props.data.treasures} treasures`}
							/>
							<h6 className="mt-3" style={{ fontWeight: 600 }}>
								{formatNumber(props.data.treasures)}{' '}
								<span className="text-gray-500 font-weight-light">
									treasures
								</span>
							</h6>
						</div>
						<div className="col-auto">
							<img
								width="36"
								height="36"
								src={IconCities}
								alt={`${props.data.cities} Cities`}
							/>
							<h6 className="mt-3" style={{ fontWeight: 600 }}>
								{formatNumber(props.data.cities)}{' '}
								<span className="text-gray-500 font-weight-light">cities</span>
							</h6>
						</div>
					</div>
				</div>
				<div className="col-6 pl-5">
					<div style={{ width: 520, height: 410 }}>
						<img
							className="img-fluid position-absolute"
							src={ImageHero}
							alt="Image Hero"
							style={{ margin: '-30px 0 0 -30', zIndex: 1 }}
						/>
						<img
							className="img-fluid position-absolute"
							src={ImageHero_}
							alt="Image Hero Frame"
							style={{ margin: '40px -20px -20px 40px' }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
