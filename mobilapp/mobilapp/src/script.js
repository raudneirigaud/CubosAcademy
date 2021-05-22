function solucao(tempo, distancia) {
    if (tempo < 5) {
        console.log("600")
    } else if (tempo >= 5 && tempo <= 60) {
        let viagem_media = tempo * 100 + distancia * 50
        console.log(viagem_media)
    } else if (tempo > 60) {
        if (distancia < 100) {
            let viagem_longa = distancia * 200
            console.log(viagem_longa)
        } else if (distancia >= 100) {
            let viagem_longa = distancia * 150
            console.log(viagem_longa)
        }
    }

}