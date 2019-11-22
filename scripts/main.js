
import initializeDetailButtonEvents from './dialogs.js'
import addMouseOverEventListeners from './highlight.js'
import addBorderToTips from './tiphighlight.js'
import { useFish } from './fish/FishDataProvider.js'
import FishListComponent from './fish/FishListComponent.js'
import { useTip } from './tips/TipDataProvider.js'
import TipListComponent from './tips/TipListComponent.js'



FishListComponent()
TipListComponent()
// initializeDetailButtonEvents()
addMouseOverEventListeners()
addBorderToTips()
