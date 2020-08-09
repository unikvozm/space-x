import * as React from 'react'
import { connect } from 'react-redux'
import { BaseAction } from 'Src/common/models/Action.model'

interface ActionsObject {
	[key: string]: ((...rest: any[]) => BaseAction) | (() => BaseAction)
}

interface SelectorsObject {
	[key: string]: (state: any) => any
}

interface DecoratorProps {
	actions?: ActionsObject
	selectors?: SelectorsObject
}

type DecoratorFunction = (props: DecoratorProps) => Function

interface ComponentProps {
	items: any
	params: any
	getItems: (params?: any) => void
	clearItems: () => void
	setRequestParams: (params: any) => void
}

export const Container: DecoratorFunction = ({ actions, selectors }): Function => {
	return (WrappedComponent: any): React.ReactNode => {
		class ChildClass extends React.PureComponent<ComponentProps, {}> {
			public componentDidMount(): void {
				const { getItems } = this.props
				if (getItems) {
					getItems()
				}
			}

			public componentWillUnmount(): void {
				const { clearItems } = this.props
				if (clearItems) {
					clearItems()
				}
			}

			public render(): JSX.Element {
				// eslint-disable-next-line react/jsx-props-no-spreading
				return <WrappedComponent {...this.props} />
			}
		}

		const mapStateToProps = (state: any): any => {
			if (!selectors) return {}
			const result = {}
			const keys = Object.keys(selectors)
			if (!keys.length) return {}
			keys.forEach((key: string): void => {
				// @ts-ignore
				result[key] = selectors[key](state)
			})
			return result
		}
		const mapDispatchToProps = (dispatch: (arg0: BaseAction) => void): any => {
			if (!actions) return {}
			const result = {}
			const keys = Object.keys(actions)
			keys.forEach((key: string): void => {
				// @ts-ignore
				result[key] = (...args: any): void => dispatch(actions[key](...args))
			})
			return result
		}
		return connect(mapStateToProps, mapDispatchToProps)(ChildClass)
	}
}
