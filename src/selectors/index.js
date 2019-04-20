import { createSelector } from 'reselect'
const getPlayer = (state) => state.players.items

export const getPlayerState = createSelector(
  [ getPlayer ],
  (players) => players
)