import React from 'react'

import { useMediaQuery } from 'react-responsive'

// react-responsive NPM Library

const DetectDevice = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
    const isTabletorMobile = useMediaQuery({ query: 'max-width: 1224px)' });

    return (
        <>
        Device is: {isTabletorMobile ? "Mobile" : "Desktop"}<br/>
        Device is: {isDesktopOrLaptop ? "Desktop" : "Mobile"}
    </>
    )
}

export default DetectDevice