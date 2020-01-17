
/**
 * makecode pxt-sensor IIC Proximity Sensor package.
 */


/**
 * pxt-sensor mudule
 */
//% weight=100 color=#102010 icon="\uf0eb" block="APDS9930"
namespace pxt-sensor {


    /**
     * set ALS GAIN
     */
    //% blockId="APDS9930_SET_AGAIN" block="set ALS GAIN %gain"
    //% weight=100 blockGap=8
    export function AGAIN(gain: APDS9930_AGAIN) {
        let t = getReg(APDS9930_CONTROL)
        t &= 0xFC
        switch (gain) {
            case APDS9930_AGAIN.AGAIN_8:
                t |= 1;
                break;
            case APDS9930_AGAIN.AGAIN_16:
                t |= 2;
                break;
            case APDS9930_AGAIN.AGAIN_120:
                t |= 3;
                break;
        }
        setReg(APDS9930_CONTROL, t)
        _AGAIN = gain
    }
    
    }
