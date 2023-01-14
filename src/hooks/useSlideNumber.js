import { useEffect, useState } from "react"
import useWindowSize from "./useWindowSize"

export default function useSlideNumber() {

    const [number, setNumber] = useState(3)
    var size = useWindowSize()

    //Sets the number of people being shown in the team section based on the window size
    useEffect(() => {
        if (size <= 1670) {
            if (size <= 1140) {
                setNumber(1)
            } else setNumber(2)
        } else setNumber(3)
    }, [size])

    return number
}