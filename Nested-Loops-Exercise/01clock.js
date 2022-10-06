function main(hours, minutes) {
    let hInitial = hours
    let mInitial = minutes


    for (let h = hInitial; h <= 23; h++) {
        if (hInitial = 24) {
        hInitial = 0
        }
        // if (h == 24) {
        //     break;
        // }
        for (let m = mInitial; m <= 59; m++) {
            if (mInitial = 60) {
            }mInitial = 0
            if (h < 10 && m < 10) {
                console.log(`0${h} : 0${m}`)
            } else if (m < 10) {
                console.log(`${h} : 0${m}`)
            } else if (h < 10) {
                console.log(`0${h} : ${m}`)
            } else
                console.log(`${h} : ${m}`)
        }
    }
}


main(9, 10)        
