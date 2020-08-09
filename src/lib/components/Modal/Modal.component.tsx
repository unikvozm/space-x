import * as React from 'react'
import './Modal.scss'

interface ComponentProps {
	close: () => void
	isShown: boolean
	children: React.ReactNode
}
export const Modal: React.FC<ComponentProps> = ({ close, isShown, children }: ComponentProps) => {
	const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
		close()
	}

	return isShown ? (
		<div className="modal" onClick={closeModal}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<span className="close" onClick={closeModal}>
					&times;
				</span>
				<div className="modal-info">{children}</div>
			</div>
		</div>
	) : null
}
