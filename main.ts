
/**
 * makecode pxtsensor IIC Proximity Sensor package.
 */

const APDS9930_I2C_ADDRESS = 0x39
const APDS9930_CONTROL = 0x0F

// AGAIN

enum APDS9930_AGAIN {

    AGAIN_1 = 1,

    AGAIN_8 = 8,

    AGAIN_16 = 16,

    AGAIN_120 = 120

};
/**
 * pxt-sensor mudule
 */
//% weight=100 color=#102010 icon="\uf0eb" block="PowerUpCode Proximity Sensor"
namespace pxtsensor {


    let _wbuf = pins.createBuffer(2);

    let _AGAIN = 1;
    
    

    /**

     * set APDS9930's reg

     */

    function setReg(reg: number, dat: number): void {

        _wbuf[0] = reg | 0xA0;

        _wbuf[1] = dat;

        pins.i2cWriteBuffer(APDS9930_I2C_ADDRESS, _wbuf);

    }



    /**

     * get a reg

     */

    function getReg(reg: number): number {

        pins.i2cWriteNumber(APDS9930_I2C_ADDRESS, reg, NumberFormat.UInt8BE);

        return pins.i2cReadNumber(APDS9930_I2C_ADDRESS, NumberFormat.UInt8BE);

    }    
    
    /**
     * set ALS GAIN
     */
    //% blockId="APDS9930_SET_AGAIN" block="set Sensor addres %gain"
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
