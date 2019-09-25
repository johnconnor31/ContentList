import React from 'react';

export default function useScroll(){
    const [mode, setMode] = React.useState('All');
    function handleScroll(e){
        if(window.scrollY >= 800 ) {
            setMode('None');
        } else if (window.scrollY >= 400) {
            setMode('Icon');
        } else {
            setMode('All');
        }
    }
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);
    return mode;
}