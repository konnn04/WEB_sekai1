const main = async () =>{    
    const config = {
        "playingTrailer" : 0,
        "musicVol":.2
    }
    let dataGame = await fetch("./public/js/data.json") 
    .then(res => res.json())
    .then(data => data)
    const srcAudio = initAudio(dataGame) 
    await $("#list .playlist").html(initPlaylist(dataGame,config) );   
    let domPlaylistItem = document.querySelectorAll(".playlist li") 
    initEvent(domPlaylistItem,srcAudio,config)
    playTrailer(srcAudio,config)
    wave(srcAudio,config)
}

function initEvent(dom,srcAudio,config) {
    let cd = false
    let array = Array.from(dom)
    $("#my-phone img").on("click", function(e){
        if (cd) {
            return
        }
        cd=true
        setTimeout(()=>{
            cd=false
        },200)
        if (e.clientY > $("#my-phone img").height() / 2 ) {
            array.forEach((e,i)=>{
                let p = parseInt(e.classList[0].slice(4))
                e.removeAttribute('class')
                p = (p + 1 >= array.length) ? p + 1 - array.length : p + 1
                e.classList.add("item" + p)
                if (p > 8) {
                    e.classList.add("hid")
                }
                if (p == 8) {
                    e.classList.add("hide")
                }

                if (p == 0) {
                    e.classList.add("show")
                }

            })
            
        }else{
            array.forEach((e,i)=>{
                let p = parseInt(e.classList[0].slice(4))
                e.removeAttribute('class')
                p = (p - 1 < 0) ? p + array.length - 1 : p - 1
                e.classList.add("item"+ p)
                if (p > 8) {
                    e.classList.add("hid")
                }
                if (p == 8) {
                    e.classList.add("show")
                }
                if (p == 0) {
                    e.classList.add("hide")
                }
                
            })
        }
        playTrailer(srcAudio,config)
        
    });
}

function playTrailer(srcAudio,config) {
    let k = parseInt(document.querySelector(".item4").getAttribute("q"))
    $(".first-start .info p:first-child").text(srcAudio[k].title)
    $(".first-start .info p:last-child").text(srcAudio[k].artist)
    $(".first-start .avt img").attr("src",srcAudio[k].thumb)
    // srcAudio[config.playTrailer].a.pause()
    config.playTrailer = k
    srcAudio[k].a.currentTime = srcAudio[k].from
    srcAudio[k].a.volume = config.musicVol
    srcAudio[k].a.play()
    $(".bg img").attr("src",srcAudio[k].thumb)
    let itv = setInterval(()=>{
        if (k != config.playTrailer) {
            clearInterval(itv)
            srcAudio[k].a.pause()
        }            
        if (srcAudio[k].a.currentTime > srcAudio[k].end - 1 ) {
            srcAudio[k].a.volume = (srcAudio[k].a.volume - (config.musicVol/10) < 0) ?0 : srcAudio[k].a.volume - (config.musicVol/10);
        }
        if (srcAudio[k].a.currentTime > srcAudio[k].end - .1 ) {
            srcAudio[k].a.currentTime = srcAudio[k].from
            srcAudio[k].a.volume = config.musicVol
        }
    },100)
    
}

function initAudio(data) {
    let a = []
    data.forEach(e => {
        a.push({
            a:new Audio(e.src),
            from:e.from,
            end:e.end,
            thumb:e.avt,
            title:e.title,
            artist:e.artist,
            bpm:e.bpm
        })
    })
    
    return a
}

function initPlaylist(data,config) {
    let dom = ""
        let d = data.length
        let length = (d< 9) ? d*(Math.ceil(9/d)) : d
        for (let i=0; i<length ; i++) {           
            if (i == 4) {
                config.playTrailer = i % d 
                $(".first-start .info p:first-child").text(data[i % d].title)
                $(".first-start .info p:last-child").text(data[i % d].artist)
                $(".first-start .avt img").attr("src",data[i % d].thumb)
            }
            dom += 
            `
            <li class="item${i}" q="${i % d}">
                <div class="avt">
                    <img src="${data[i % d].avt}" alt="" srcset="">
                </div>
                <div class="info">
                    <p>${data[i % d].title}</p>
                    <p>${data[i % d].artist}</p>
                </div>
                <div class="diff">
                    <span>${data[i % d].diff}</span>
                </div>
            </li>
            `
        }
       
        return dom
}

const c = (type,text) =>{
    console.type(text)
}

function wave(srcAudio,config) {
    if (!srcAudio) {
        $(".musicWave1 .char").height(0)
        return
    }
    let k = config.playingTrailer
    let beat = srcAudio[k].bpm
    let maxHeight =  $(".musicWave1").height() *3/4
    if (document.itv1) {
        clearInterval(document.itv1)
    }
    let m = 0
    document.itv1 = setInterval(()=>{
       $(".musicWave1 .char").each(function(e) {
            $(this).height(Math.random() * maxHeight)
        });
    },8000 / beat)

}

window.onload = main()