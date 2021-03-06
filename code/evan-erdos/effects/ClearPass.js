///
/// @author mrdoob / http://mrdoob.com/
///
import * as THREE from '../module.js'
import { Pass } from './module.js'

export default class ClearPass extends Pass {
    constructor(clearColor, clearAlpha) { super()
        this.needsSwap = false
        this.clearColor = (clearColor!==undefined)?clearColor:0x000000
        this.clearAlpha = (clearAlpha!==undefined)?clearAlpha:0
    }

    render(renderer, writeBuffer, readBuffer, delta, maskActive) {
        let oldClearColor, oldClearAlpha
        if (this.clearColor) {
            oldClearColor = renderer.getClearColor().getHex()
            oldClearAlpha = renderer.getClearAlpha()
            renderer.setClearColor(this.clearColor,this.clearAlpha)
        }

        renderer.setRenderTarget(this.renderToScreen?null:readBuffer)
        renderer.clear()
        if (this.clearColor) renderer.setClearColor(oldClearColor, oldClearAlpha)
    }
}
