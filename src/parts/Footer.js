import React from 'react';

import Button from 'elements/Button';
import IconText from 'parts/IconText';

export default function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="row">
					<div className="col-auto" style={{ width: 350 }}>
						<IconText />
						<p className="brand-tagline">
							We kaboom your beauty holiday instantly and memorable.
						</p>
					</div>
					<div className="col-auto mr-5">
						<h6 className="mt-2" style={{ fontWeight: 600 }}>
							For Beginners
						</h6>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<Button type="link" href="/register">
									New Account
								</Button>
							</li>
							<li className="list-group-item">
								<Button type="link" href="/properties">
									Start Booking a Room
								</Button>
							</li>
							<li className="list-group-item">
								<Button type="link" href="/use-payments">
									Use Payments
								</Button>
							</li>
						</ul>
					</div>
					<div className="col-2 mr-5">
						<h6 className="mt-2" style={{ fontWeight: 600 }}>
							Explore Us
						</h6>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<Button type="link" href="/careers">
									Our Careers
								</Button>
							</li>
							<li className="list-group-item">
								<Button type="link" href="/privacy">
									Privacy
								</Button>
							</li>
							<li className="list-group-item">
								<Button type="link" href="/terms">
									Terms & Conditions
								</Button>
							</li>
						</ul>
					</div>
					<div className="col-3">
						<h6 className="mt-2" style={{ fontWeight: 600 }}>
							Connect Us
						</h6>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<Button
									type="link"
									isExternal
									href="mailto:support@hallobackpacker.id">
									support@hallobackpacker.id
								</Button>
							</li>
							<li className="list-group-item">
								<Button type="link" isExternal href="tel:+622122081996">
									021 - 2208 - 1996
								</Button>
							</li>
							<li className="list-group-item">
								<span>Hallobackpacker, Kemang, Jakarta</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col text-center copyrights">
						Copyright 2022 * All rights reserved * Hallobackpacker
					</div>
				</div>
			</div>
		</footer>
	);
}