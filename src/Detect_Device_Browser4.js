import React, { useState, useEffect } from "react";

var MobileDetect = require('mobile-detect')

const DeviceDetection = () => {
    const [deviceType, setDeviceType] = useState("");

    var md = new MobileDetect('Mozilla/5.0 (Linux; U; Android 4.0.3; en-in; SonyEricssonMT11i' +
        'Build/4.1.A.0.562) AppleWebKit/534/30 (KHTML, like Gecko)' +
        'Version/4.0 Mobile Safari/534.30');


    useEffect(() => {

        if (
            /Android|webOS|iPhone|iPad|iPod|Blackberry|IEMobile|Opera Mini|Windows Phone/i.test(
                navigator.userAgent
            )
        ) {
            setDeviceType("Mobile");
        } else {
            setDeviceType("Desktop");
        }
    }, []);
    return (
        <>
            <div>
                Device is : {deviceType}
            </div>
            <div>
                Device is : {md.mobile()}
            </div>
            <div>
                Device is : {md.phone()}
            </div>
            <div>
                Device is : {md.tablet()}
            </div>
            <div>
                Device is : {md.userAgent()}
            </div>
            <div>
                Device is : {md.os()}
            </div>
            <div>
                Device is : {md.is('iPhone')}
            </div>
            <div>
                Device is : {md.is('bot')}
            </div>
            <div>
                Device is : {md.version('Webkit')}
            </div>
            <div>
                Device is : {md.versionStr('Build')}
            </div>
            <div>
                Device is : {md.match('playstion|xbox')}
            </div>
        </>
    );
}

export default DeviceDetection