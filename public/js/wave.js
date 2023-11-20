function wave(srcAudio,config) {
    if (!srcAudio) {
        $(".musicWave1 .char").height(0)
        return
    }
    let k = config.playingTrailer
    let beat =  60 / srcAudio[k].bpm
    let times = 0
    
    if (document.itv1) {
        clearInterval(document.itv1)
    }
    let deltaTime = 60000 / srcAudio[k].bpm / 8
    document.itv1 = setInterval(()=>{
        let maxHeight =  $(".musicWave1").height() *3/4
        times++
        if (times >= 7) {
            if (times > 8 ) times = 0
            $(".musicWave1 .char").each(function(e) {
                let r = (Math.random() * maxHeight) * (srcAudio[k].a.volume / config.musicVol)
                $(this).height(r)
            });
        }else{
            $(".musicWave1 .char").each(function(e) {
                let r = (Math.random() * maxHeight * .6) * (srcAudio[k].a.volume / config.musicVol)
                $(this).height(r)
            });
            // console.log(srcAudio[k].a.volume / config.musicVol)
            
        }        
    },deltaTime)

}