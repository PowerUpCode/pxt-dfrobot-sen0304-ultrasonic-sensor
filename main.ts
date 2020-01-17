
/**
 * makecode PowerUpCode DFRobot IIC Ultrasonic Sensor package.
 */

const SEN0304_I2C_ADDRESS = 0x11;
const MEASURE_MODE_PASSIVE = 0x00;
const MEASURE_RANG_500 = 0x20;
const CMD_DISTANCE_MEASURE = 0x01;

const CFG_INDEX = 0x07;
const CMD_INDEX = 0x08;



enum SEN0304_RANGE {
    
    RANGE_150 = 0x20,
    RANGE_300 = 0x20,
    RANGE_500 = 0x20
};



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
//% weight=100 color=#102010 icon="\uf0eb" block="Ultrasonic Sensor"
namespace pxtsensor {


    let _wbuf = pins.createBuffer(2);

    let _AGAIN = 1;
    
    
    /**
     * setup Sensor
     */
    //% blockId="SEN0304_SET_RANGE" block="set Range %range"
    //% weight=100 blockGap=8
    function setup(range: SEN0304_RANGE): void {
      let data =  (MEASURE_MODE_PASSIVE | range);//the measurement mode is set to passive mode, measurement range is set to 500CM.
      i2cWriteBytes(CFG_INDEX, data);
      
    }
    
    /**

     * set APDS9930's reg

     */

    function i2cWriteBytes(reg: number, dat: number): void {

        _wbuf[0] = reg | 0xA0;

        _wbuf[1] = dat;

        pins.i2cWriteBuffer(SEN0304_I2C_ADDRESS, _wbuf);

    }



    /**

     * get a reg

     */

    function getReg(reg: number): number {

        pins.i2cWriteNumber(SEN0304_I2C_ADDRESS, reg, NumberFormat.UInt8BE);

        return pins.i2cReadNumber(SEN0304_I2C_ADDRESS, NumberFormat.UInt8BE);

    }    
    

    
    }
