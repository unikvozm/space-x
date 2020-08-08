import * as React from 'react'
import '../styles/Home.scss'
import { Quote } from '../components/Quote.component'
import { CardsHolder } from '../components/CardsHolder.component'

export const HomeContainer = () => (
	<main className="home">
		<Quote />
		<CardsHolder />
	</main>
)
