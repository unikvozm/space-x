import * as React from 'react'
import { Link } from 'react-router-dom'
import './Cards.scss'

interface OwnProps {
	imgSrc: string
	link: string
	text: string
}
export const CardImgLink: React.FC<OwnProps> = ({ imgSrc, link, text }: OwnProps): JSX.Element => (
	<div className="card">
		<Link to={link}>
			<img src={imgSrc} alt="" />
			<p>{text}</p>
		</Link>
	</div>
)
