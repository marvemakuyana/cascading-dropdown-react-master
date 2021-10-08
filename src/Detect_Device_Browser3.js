import React, { useState, useEffect } from "react";

//Navigator.maxTouchPoints

const DeviceDetector = () => {

    const [deviceType, setDeviceType] = useState("")


    useEffect (() =>{
        let hasTouchScreen =  false;
        if('maxTouchPoints' in navigator){
            hasTouchScreen = navigator.maxTouchPoints > 0;
        } else if('msMaxTouchPoints' in navigator){
            hasTouchScreen = navigator.msMaxTouchPoints > 0
        } else{
            const mQ = window.matchMedia && matchMedia("(pointer:coarse)");
            if(mQ && mQ.media === "(pointer:coarse)") {
                hasTouchScreen = !!mQ.matches;
            } else if("orientation" in window) {
                hasTouchScreen = true
            } else{
                var UA = navigator.userAgent;
                hasTouchScreen = 
                /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
                /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
            }
        }

        if(hasTouchScreen) {
            setDeviceType("Mobile");
        } else {
            setDeviceType("Desktop")
        }
    }, []);

    return (
    <> I am rendered on: {deviceType} </>
    )
}

export default DeviceDetector