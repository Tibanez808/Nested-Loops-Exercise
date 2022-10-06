function main(hours, minutes, seconds) {
    let hInitial = hours
    let mInitial = minutes
    let sInitial = seconds
    for (let h = hInitial; h <= 23; h++) {
        if (hInitial = 24) {
            hInitial = 0
        }
        // if (h == 24) {
        //     break;
        // }
        for (let m = mInitial; m <= 59; m++) {
            if (mInitial = 60) {
                mInitial = 0
            }
            for (let s = sInitial; s <= 59; s++) {
                if (sInitial = 60) {
                    sInitial = 0
                }
                if (h < 10 && m < 10 && s < 10) {
                    console.log(`0${h}:0${m}:0${s}`)
                } else if (m < 10 && s < 10) {
                    console.log(`${h}:0${m}:0${s}`)
                } else if (s < 10) {
                    console.log(`${h}:${m}:0${s}`)
                } else if (m < 10) {
                    console.log(`${h}:0${m}:${s}`)
                } else if (h < 10) {
                    console.log(`0${h}:${m}:${s}`)
                } else if (h < 10 && m < 10) {
                    console.log(`0${h}:0${m}:${s}`)
                } else if (h < 10 && s < 10) {
                    console.log(`0${h}:${m}:0${s}`)
                } else
                console.log(`${h}:${m}:${s}`)
            }
        }
    }
}


main(21, 59, 58)        
