import { IStore } from 'Src/store/IStore.interface'
import { ILaunch } from '../models/Launch.model'

const getLaunches = (state: IStore): ILaunch[] => state.launches.launches

export const launchesSelector = {
	getLaunches,
}
