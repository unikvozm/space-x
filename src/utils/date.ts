const options = { year: 'numeric', month: 'long', day: 'numeric' }

export const DateFromUTC = (date: string): string =>
	new Date(date).toLocaleDateString(undefined, options)
