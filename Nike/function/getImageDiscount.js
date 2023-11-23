var getImageDiscount = (discount)=> {
    switch (discount) {
        case 5: return require('../discount/5.png')
        case 10: return require('../discount/10.png')
        case 15: return require('../discount/15.png')
        case 20: return require('../discount/20.png')
        case 30: return require('../discount/30.png')
        case 40: return require('../discount/40.png')
        case 50: return require('../discount/50.png')
        case 60: return require('../discount/60.png')
        case 70: return require('../discount/70.png')
        default: return null
    }
}

export {getImageDiscount}