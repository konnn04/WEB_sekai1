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
    // playTrailer(srcAudio,config)
    wave()
}

function initEvent(dom,srcAudio,config) {
    document.cdTrailer = false
    
    //Sự kiện chọn
        $("#my-phone .img .selection").on("click", function(e){
            let option = Math.floor(e.offsetY / ($(this).height() / 7))
            if (option == 3 ) return
            changeTrailerMusic(dom,(option - 3)*-1)
            playTrailer(srcAudio,config)
        })
        
}

function changeTrailerMusic(dom, offset) {
    //Tạo delay
    if (document.cdTrailer) {
        return
    }
    document.cdTrailer=true
    setTimeout(()=>{
        document.cdTrailer=false
    },200)
    //Chuyển bài
    // console.log(dom)
    Array.from(dom).forEach((e,i)=>{
        let p = parseInt(e.classList[0].slice(4))
        e.removeAttribute('class')
        p = (offset > 0) 
            ? ((p + offset >= dom.length) ? p + offset - dom.length : p + offset) 
            : ((p + offset < 0) ? p + offset + dom.length : p + offset) 
        e.classList.add("item" + p)
        if (p>14) {
            e.classList.add("hid")
        }
        if (p > 10 && p<15) {
            e.classList.add((offset > 0 )?"hide":"show")
        }
        if (p < 4) {
            e.classList.add((offset > 0 )?"show":"hide")
        }
    })  

}

function playTrailer(srcAudio,config) {
    wave(srcAudio,config)
    let k = parseInt(document.querySelector(".item7").getAttribute("q"))
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
        let length = (d< 15) ? d*(Math.ceil(15/d)) : d
        for (let i=0; i<length ; i++) {           
            if (i == 7) {
                config.playTrailer = i % d 
                $(".first-start .info p:first-child").text(data[i % d].title)
                $(".first-start .info p:last-child").text(data[i % d].artist)
                $(".first-start .avt img").attr("src",data[i % d].avt)
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

// const c = (type,text) =>{
//     console.type(text)
// }



window.onload = main()