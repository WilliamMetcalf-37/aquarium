import initializeDetailButtonEvents from './dialogs.js'
import addMouseOverEventListeners from './highlight.js'
import addBorderToTips from './tiphighlight.js'
import { useFish } from './FishDataProvider.js'

initializeDetailButtonEvents()
addMouseOverEventListeners()
addBorderToTips()
useFish()


const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}