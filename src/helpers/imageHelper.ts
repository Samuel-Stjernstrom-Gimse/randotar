// --- Main ------------------------------------------------------------------------------------------------------------

// @ts-ignore
import skins from '../../src/static/images/main/skin.png'
// @ts-ignore
import outline from '../../src/static/images/main/outline.png'
// @ts-ignore
import shirt from '../../src/static/images/main/shirt.png'

// --- Headgear --------------------------------------------------------------------------------------------------------

// @ts-ignore
import hat1 from '../../src/static/images/headgear/hat-1.png'
// @ts-ignore
import hat2 from '../../src/static/images/headgear/hat-2.png'
// @ts-ignore
import hat3 from '../../src/static/images/headgear/hat-3.png'
// @ts-ignore
import hat4 from '../../src/static/images/headgear/hat-4.png'
// @ts-ignore
import hat5 from '../../src/static/images/headgear/hat-5.png'
// @ts-ignore
import hat6 from '../../src/static/images/headgear/hat-6.png'
// @ts-ignore
import hat7 from '../../src/static/images/headgear/hat-7.png'
// @ts-ignore
import hat8 from '../../src/static/images/headgear/hat-8.png'
// @ts-ignore
import hat9 from '../../src/static/images/headgear/hat-9.png'
// @ts-ignore
import hat10 from '../../src/static/images/headgear/hat-10.png'
// @ts-ignore
import hat11 from '../../src/static/images/headgear/hat-11.png'

// --- Accessories -----------------------------------------------------------------------------------------------------

// @ts-ignore
import acs1 from '../../src/static/images/accessories/acs-1.png'
// @ts-ignore
import acs2 from '../../src/static/images/accessories/acs-2.png'
// @ts-ignore
import acs3 from '../../src/static/images/accessories/acs-3.png'
// @ts-ignore
import acs4 from '../../src/static/images/accessories/acs-4.png'
// @ts-ignore
import acs5 from '../../src/static/images/accessories/acs-5.png'
// @ts-ignore
import acs6 from '../../src/static/images/accessories/acs-6.png'
// @ts-ignore
import acs7 from '../../src/static/images/accessories/acs-7.png'
// @ts-ignore
import acs8 from '../../src/static/images/accessories/acs-8.png'
// @ts-ignore
import acs9 from '../../src/static/images/accessories/acs-9.png'
// @ts-ignore
import acs10 from '../../src/static/images/accessories/acs-10.png'
// @ts-ignore
import acs11 from '../../src/static/images/accessories/acs-11.png'

type ImageHelper = {
    skin: string,
    outline: string,
    shirt: string,
}

const imageHelper: ImageHelper = {
    skin: skins,
    outline,
    shirt,
}

type AcsHelper = {
    acs1: string,
    acs2: string,
    acs3: string,
    acs4: string,
    acs5: string,
    acs6: string,
    acs7: string,
    acs8: string,
    acs9: string,
    acs10: string,
    acs11: string,
}

const acsHelper: AcsHelper = {
    acs1,
    acs2,
    acs3,
    acs4,
    acs5,
    acs6,
    acs7,
    acs8,
    acs9,
    acs10,
    acs11,
}

const acsArray = [
    acs1,
    acs2,
    acs3,
    acs4,
    acs5,
    acs6,
    acs7,
    acs8,
    acs9,
    acs10,
    acs11,
]


type HatHelper = {
    hat1: string,
    hat2: string,
    hat3: string,
    hat4: string,
    hat5: string,
    hat6: string,
    hat7: string,
    hat8: string,
    hat9: string,
    hat10: string,
    hat11: string,
}


const hatHelper: HatHelper = {
    hat1,
    hat2,
    hat3,
    hat4,
    hat5,
    hat6,
    hat7,
    hat8,
    hat9,
    hat10,
    hat11,
}

const hatArray = [
    hat1,
    hat2,
    hat3,
    hat4,
    hat5,
    hat6,
    hat7,
    hat8,
    hat9,
    hat10,
    hat11,
]

export {imageHelper, hatHelper, hatArray, acsHelper, acsArray}