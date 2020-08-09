import * as React from 'react'
import { Input, OrbitSelect, Button } from 'Src/lib/components'
import { FilterParams } from 'Src/common/models'

interface ComponentProps {
	onFilterChange: (
		fieldName: string
	) => (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
	filtersValue: FilterParams
	clearForm: () => void
	submitForm: (e: React.FormEvent<HTMLElement>) => void
}
export const LaunchesForm: React.FC<ComponentProps> = ({
	onFilterChange,
	filtersValue,
	clearForm,
	submitForm,
}: ComponentProps): JSX.Element => (
	<form onSubmit={submitForm}>
		<Input
			id="name"
			onChange={onFilterChange('name')}
			value={filtersValue.name}
			type="text"
			label="Name: "
		/>
		<Input
			id="date_from"
			onChange={onFilterChange('date_from')}
			value={filtersValue.date_from}
			type="date"
			label="Date from: "
		/>
		<Input
			id="date_to"
			onChange={onFilterChange('date_to')}
			value={filtersValue.date_to}
			type="date"
			label="Date to: "
		/>
		<OrbitSelect onChange={onFilterChange('rockets')} value={filtersValue.rockets} />
		<Button type="submit" title="Find" className="active" />
		<Button type="button" title="Clear" onClick={clearForm} />
	</form>
)
