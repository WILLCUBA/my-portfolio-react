import { useState, useEffect } from "react";


const UseTypedSuperpower = function(superpowers) {
    //typing animation
    const [typedSuperpower, setTypedSuperpower] = useState('');
    useEffect(() => {
        const nextTypedSuperpower = superpowers[0].slice(
            0,
            typedSuperpower.length + 1
        )

        if (nextTypedSuperpower === typedSuperpower) {
            return
        }

        const timeout = setTimeout(() => {
            setTypedSuperpower(superpowers[0].slice(0, typedSuperpower.length + 1))
        }, 150)

        return () => clearTimeout(timeout)
    },[typedSuperpower, superpowers])
    //typing animation end
    return typedSuperpower
}

export default UseTypedSuperpower