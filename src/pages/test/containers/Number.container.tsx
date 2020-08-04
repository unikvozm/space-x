import { connect } from 'react-redux'
import { Dispatch } from 'react'
import { AnyAction } from 'redux'
import { NumberSetterComponent } from '../components/Number.components'
import { numberActions } from '../actions/numbers.action'

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
	onRequestNewNumber: () => dispatch(numberActions.getNumber()),
})

export const NumberSetterContainer = connect(null, mapDispatchToProps)(NumberSetterComponent)
