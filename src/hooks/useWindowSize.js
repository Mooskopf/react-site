import { useEffect, useState } from "react"

export default function useWindowSize() {

    const [size, setSize] = useState(0)

    //Sets window size on first render
    useEffect(() => {
        setSize([window.innerWidth])
    }, [])

    //Updates window size state on resizing
    function useSize() {
        useEffect(() => {
            function updateSize() {
                setSize([window.innerWidth])
            }
            window.addEventListener('resize', updateSize)
            return () => window.removeEventListener('resize', updateSize)
        }, [])
        return size
    }

    useSize()

    return size
}