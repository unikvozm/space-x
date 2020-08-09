import * as React from 'react'
import { Modal } from 'Src/lib/components'
import { ILaunch } from '../models/Launch.model'
import '../styles/ModalLaunch.scss'

interface ComponentProps {
	close: () => void
	isShown: boolean
	launch: ILaunch | null
}
export const ModalLaunch: React.FC<ComponentProps> = ({
	close,
	isShown,
	launch,
}: ComponentProps) => {
	return (
		<Modal isShown={isShown} close={close}>
			<h5>{launch?.mission_name}</h5>
			{launch?.links?.video_link && (
				<iframe
					title={launch.mission_name}
					width="320"
					height="150"
					src={launch.links.video_link.replace('watch?v=', 'embed/')}
					frameBorder="0"
					allowFullScreen
				/>
			)}
			<div>
				<p>Photo Gallery:</p>
				<div className="photo-container">
					{launch?.links?.flickr_images?.length
						? launch.links?.flickr_images.map((img) => (
								<img src={img} key={img} alt="" className="photo" />
						  ))
						: 'No photo available'}
				</div>
			</div>
		</Modal>
	)
}
