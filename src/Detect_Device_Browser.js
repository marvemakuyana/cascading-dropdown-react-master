import React, {useEffect, useState } from 'react';

//window.innerwidth
const useDeviceDetect = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    }
    
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, []);

    return (
    <div>
        {width >= 768 && 
        <div>hello world</div>
        }
    </div>
    )
}

export default useDeviceDetect