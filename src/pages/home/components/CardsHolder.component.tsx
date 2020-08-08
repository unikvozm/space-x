import * as React from 'react'
import { FrontUrls } from 'Src/constants/FrontUrls'
import { CardImgLink } from 'Src/lib/components/Cards/CardImgLink.component'

export const CardsHolder = () => (
	<div className="card-container">
		<CardImgLink
			link={FrontUrls.history}
			imgSrc="..//assets/images/history.png"
			text="Read History"
		/>
		<CardImgLink
			link={FrontUrls.launches}
			imgSrc="..//assets/images/launches.png"
			text="Read Launches"
		/>
	</div>
)
