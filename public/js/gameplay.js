document.INTERVAL = {}

let container1 = document.querySelector(".game .line1 .container")
let container2 = document.querySelector(".game .line2 .container")
let s = "["

const beatmap = [{'l':1,'t':0.988917,'c':'tap'},{'l':1,'t':1.782783,'c':'tap'},{'l':1,'t':2.631256,'c':'tap'},{'l':1,'t':3.423843,'c':'tap'},{'l':1,'t':4.286479,'c':'tap'},{'l':1,'t':5.087739,'c':'tap'},{'l':1,'t':5.942211,'c':'tap'},{"l":0,"c":"hold","t":1.047528,"lg":5.453287},{'l':0,'t':7.606417,'c':'tap'},{'l':0,'t':8.400548,'c':'tap'},{'l':0,'t':9.204796,'c':'tap'},{'l':0,'t':10.045231,'c':'tap'},{'l':0,'t':10.873588,'c':'tap'},{'l':0,'t':11.663675,'c':'tap'},{"l":1,"c":"hold","t":6.759865,"lg":5.343645},{'l':1,'t':12.517703,'c':'tap'},{'l':0,'t':13.311275,'c':'tap'},{'l':0,'t':13.732785,'c':'tap'},{'l':1,'t':14.174974,'c':'tap'},{'l':0,'t':14.534836,'c':'tap'},{'l':1,'t':15.381123,'c':'tap'},{'l':0,'t':15.757273,'c':'tap'},{'l':1,'t':16.623325,'c':'tap'},{'l':0,'t':17.038167,'c':'tap'},{'l':1,'t':17.449458,'c':'tap'},{'l':0,'t':17.638072,'c':'tap'},{'l':1,'t':18.126252,'c':'tap'},{'l':1,'t':18.717833,'c':'tap'},{'l':0,'t':19.07024,'c':'tap'},{'l':1,'t':19.29394,'c':'tap'},{'l':1,'t':19.476107,'c':'tap'},{'l':0,'t':19.735571,'c':'tap'},{'l':1,'t':19.924977,'c':'tap'},{'l':0,'t':20.734942,'c':'tap'},{'l':1,'t':21.929948,'c':'tap'},{'l':0,'t':22.317597,'c':'tap'},{'l':1,'t':22.54879,'c':'tap'},{'l':1,'t':23.198544,'c':'tap'},{'l':0,'t':23.586297,'c':'tap'},{'l':1,'t':23.988618,'c':'tap'},{'l':1,'t':24.556684,'c':'tap'},{'l':1,'t':25.242678,'c':'tap'},{'l':0,'t':25.68288,'c':'tap'},{'l':0,'t':25.860989,'c':'tap'},{'l':1,'t':26.10507,'c':'tap'},{'l':0,'t':26.295242,'c':'tap'},{'l':1,'t':26.512242,'c':'tap'},{'l':1,'t':26.871702,'c':'tap'},{'l':0,'t':27.258609,'c':'tap'},{'l':1,'t':27.258609,'c':'tap'},{'l':1,'t':27.661396,'c':'tap'},{'l':1,'t':28.094121,'c':'tap'},{'l':1,'t':28.535305,'c':'tap'},{'l':0,'t':28.930564,'c':'tap'},{'l':1,'t':28.949746,'c':'tap'},{'l':1,'t':29.335443,'c':'tap'},{'l':1,'t':29.758438,'c':'tap'},{'l':1,'t':30.153645,'c':'tap'},{"l":0,"c":"hold","t":30.57805,"lg":0.14387299999999925},{'l':1,'t':31.000406,'c':'tap'},{'l':1,'t':31.415465,'c':'tap'},{'l':1,'t':31.837248,'c':'tap'},{'l':1,'t':32.223169,'c':'tap'},{'l':1,'t':32.657014,'c':'tap'},{'l':1,'t':33.044494,'c':'tap'},{"l":1,"c":"hold","t":30.542805,"lg":2.7262479999999982}]


async function main(){
    beatmap.sort((a,b)=>{
        return (a.t - b.t)
    })
    const config = {        
        bgSpeed:100,
        bgX1:0,
        bgX2:document.querySelectorAll("#bg .img")[0].offsetWidth,       
        g:.25,
        a:0,
        key:{},
        playing:false,
        isRun:false,
        timerStart:0,
        delay:2,
        timer:0,
        beat:0,
        press:[false,false],
        volumeSfx: .5,
        volumeMusic: .4,
        query:8,
        speed:900,
        beatmap: {
            "I":[],
            "II":[]
        },
        pos:[0,0]
    }
    const dataGame = await fetch("./public/js/data.json") 
    .then(res => res.json())
    .then(data => data)
    const asset = {
        "hit1": new Audio("./public/audio/sfx/drum-hitfinish.wav"),
        "hit2": new Audio("./public/audio/sfx/drum-hitwhistle.wav"),
        "audio": new Audio(dataGame[config.query].src),
        bg: document.querySelectorAll("#bg .img"),
        lineHit: document.querySelector(".game .lineHit"),
        ground:document.querySelector(".game .ground"),
        player:document.querySelector(".game .player"),
        subPlayer:document.querySelector(".game .sub-player"),
        cycle:[document.querySelector(".game .line1"),document.querySelector(".game .line2")],
    }
    //Nap map
    beatmap.forEach((e,i)=>{        
        if (e.l == 0) config.beatmap["I"].push(e); else config.beatmap["II"].push(e)
    })
    
    let t = ""
    config.beatmap["I"].forEach((e,i)=>{
        e.i = i
        if (e.c == 'tap') {
            t+=`<div class="box l1-${i}" style="left: ${e.t*config.speed}px"></div>`
        }else{
            t+=`<div class="hold l1-${i}"  style="left: ${e.t*config.speed}px; width: ${e.lg*config.speed}px"></div>`
        }
    })
    container1.innerHTML = t
    t= ""
    config.beatmap["II"].forEach((e,i)=>{
        e.i = i
        if (e.c == 'tap') {
            t+=`<div class="box l2-${i}" style="left: ${e.t*config.speed}px"></div>`
        }else{
            t+=`<div class="hold l2-${i}" style="left: ${e.t*config.speed}px; width: ${e.lg*config.speed}px"></div>`
        }
    })
    container2.innerHTML = t
    asset.bg[1].style.left = asset.bg[1].offsetWidth+ "px"

    scrollBg(config,asset)
    setInterval(()=>{
        scrollBg(config,asset)
    },500)
    initGavityAndGame(config,asset,dataGame)
    initEvent(config,asset)
}

function initEvent(config,asset) {
    document.onkeydown = (e)=>{
        config.key[e.key.toLowerCase()] = true
    }
    document.onkeyup = (e)=>{
        config.key[e.key.toLowerCase()] = false
    }
}

function playSfx(audio,vol) {
    audio.currentTime = 0
    audio.volume = vol
    audio.play()
}

function initGavityAndGame(config,asset,dataGame){
    
    
    let bpm = dataGame[config.query].bpm / 60 / 3

    let on = [{
        "db":false,
        "s":"",
        "t":0
    },{
        "db":false,
        "s":"",
        "t":0
    }]

    document.INTERVAL = setInterval(()=>{
        //Tạo map
        // if (config.key["a"]) {
        //     if (on[0].db == false) {
        //         on[0].db=true
        //         on[0].t = asset.audio.currentTime
        //         on[0].s = `{"l":0,"c":"hold","t":${asset.audio.currentTime},"lg":`
        //     }
        // }else{
        //     if (on[0].db) {
        //         on[0].db=false                
        //         on[0].s += `${asset.audio.currentTime - on[0].t}},`
        //         s+=on[0].s
        //     }
        // }

        // if (config.key["l"]) {
        //     if (on[1].db == false) {
        //         on[1].db=true
        //         on[1].t = asset.audio.currentTime
        //         on[1].s = `{"l":1,"c":"hold","t":${asset.audio.currentTime},"lg":`
        //     }
        // }else{
        //     if (on[1].db) {
        //         on[1].db=false                
        //         on[1].s += `${asset.audio.currentTime - on[1].t}},`
        //         s+=on[1].s
        //     }
        // }

        checkEvent(config,asset,dataGame)
        

        //Đổi màu nhi có nhấn
        if (config.key["d"] || config.key["f"] ||config.key["j"] || config.key["k"]) {
            asset.player.classList.add("press")
        }else{
            asset.player.classList.remove("press")
        }
        //Nhấn 2 line 1 lúc
        if ((config.key["d"] || config.key["f"]) && (config.key["j"] || config.key["k"])) {
            asset.subPlayer.classList.add("press")
        }else{
            asset.subPlayer.classList.remove("press")

        }
        //Xử lý va chạm
        let posY = asset.player.offsetTop
        if (posY + asset.player.offsetHeight < asset.ground.offsetTop ) {
            config.a +=config.g
            posY+=config.a
            if (posY > asset.ground.offsetTop - asset.player.offsetHeight) {
                posY=asset.ground.offsetTop - asset.player.offsetHeight
                config.a=0
            }
            asset.player.style.top = (posY) +"px";
        }

        if (config.isRun) {            
            if (config.playing) {
                config.timer = asset.audio.currentTime
            }else{
                config.timer = (Date.now()/1000) - config.timerStart - config.delay
            }

            if (config.timer >=  config.beat) {
                config.beat +=bpm
            }   

            if (!config.playing && config.timer >=0 ){
                playSfx(asset.audio,.4)                
                config.playing = true
            }
            // Runframe
            container1.style.left = (-config.timer*config.speed + asset.lineHit.offsetLeft)+ "px"
            container2.style.left = (-config.timer*config.speed + asset.lineHit.offsetLeft)+ "px"
            // if (config.beatmap["I"][0].t < config.timer) {
            //     if (config.beatmap["I"][0].c == 'tap') {
            //         config.key["k"] = true
            //         setTimeout(()=>{
            //             config.key["k"] = false
            //         },50)
            //         config.pos[0] = config.beatmap["I"][0].i
            //         config.beatmap["I"].shift()
            //     }else{
            //         config.key["k"] = true
            //         setTimeout(()=>{
            //             config.key["k"] = false
            //         },config.beatmap["I"][0].lg*1000)    
            //         config.pos[0] = config.beatmap["I"][0].i
            //         config.beatmap["I"].shift()
            //     }
            // }

            // if (config.beatmap["II"][0].t < config.timer) {
            //     if (config.beatmap["II"][0].c == 'tap') {
            //         config.key["d"] = true
            //         setTimeout(()=>{
            //             config.key["d"] = false
            //         },50)
            //         config.pos[1] = config.beatmap["II"][0].i
            //         config.beatmap["II"].shift()
            //     }else{                    
            //         config.key["d"] = true
            //         setTimeout(()=>{
            //             config.key["d"] = false                        
            //         },config.beatmap["II"][0].lg*1000)

            //         config.pos[1] = config.beatmap["II"][0].i
            //         config.beatmap["II"].shift()
            //     }
            // } 
        }

        if ( !config.playing && config.key[" "]) {
            config.isRun = true
            config.timerStart = Date.now() / 1000            
            config.beat = 0            
        }       
        if (config.key["o"]) console.log(s)
    },1000/120)
}

function checkEvent(config, asset, dataGame){
    // Line duoi
    let k = config.key["d"] || config.key["f"]
    if (k) {
        config.a = 0
        asset.player.style.top = asset.ground.offsetTop - 500 +"px";
        asset.cycle[1].classList.add("press")
        if (k!= config.press[0]) {
            if (!config.press[0]) {
                playSfx(asset.hit1,config.volumeSfx)
                checkDistance(config, asset,1, true)
            }                
            // s+=`{'l':0,'t':${asset.audio.currentTime},'c':'tap'},`
            config.press[0] = true                
        }
    }else{        
        asset.cycle[1].classList.remove("press")
        if (config.press[0]) {
            checkDistance(config, asset,1, false)
        }
        config.press[0] = false
    }
    //Line treen
    k = config.key["j"] || config.key["k"]
    if (k) {
        asset.player.style.top = asset.ground.offsetTop - asset.player.offsetHeight +"px";
        asset.player.classList.add("press")
        asset.cycle[0].classList.add("press")
        if (k!= config.press[1]) {
            if (!config.press[1]) {
                playSfx(asset.hit2,config.volumeSfx)   
                checkDistance(config, asset,0, true)                 
            }            
            // s+=`{'l':1,'t':${asset.audio.currentTime},'c':'tap'},`
            config.press[1] = true                
        }
    }else{
        asset.cycle[0].classList.remove("press")
        if (config.press[1]) {
            checkDistance(config, asset,0, false)
            // document.querySelector(`.line1 .l1-${config.pos[0]}`).style.display = "none"
        }
        config.press[1] = false
    }

    let d = container1.offsetLeft + document.querySelector(`.line1 .l1-${config.pos[0]}`).offsetLeft
    if (d<0) {
        let k = document.querySelector(`.line1 .l1-${config.pos[0]}`)       
        if (!k.classList.contains("h")) {
            k.classList.add("h")
            config.beatmap["I"].shift()
            config.pos[0] = config.beatmap["I"][0].i
            let kk = document.querySelector("#AP")
            kk.className = ""
            setTimeout(()=>{
                kk.classList.add("miss")
            },10)
        }
    }

    d = container2.offsetLeft + document.querySelector(`.line2 .l2-${config.pos[1]}`).offsetLeft
    if (d<0) {
        let k = document.querySelector(`.line2 .l2-${config.pos[1]}`)
        if (!k.classList.contains("h")) {
            k.classList.add("h")
            config.beatmap["II"].shift()
            config.pos[1] = config.beatmap["II"][0].i
            let kk = document.querySelector("#AP")
            kk.className = ""
            setTimeout(()=>{
                kk.classList.add("miss")
            },10)
        }
    }
    

}

function checkDistance(config,asset,line,status) {
    let k = document.querySelector("#AP")
    let oo = document.querySelector(`.line${line+1} .l${line+1}-${config.pos[line]}`)
    let d = container1.offsetLeft + oo.offsetLeft - document.querySelector(".game .lineHit").offsetLeft
    if (Math.abs(d) <= 250) {
        if (status) {
            if  (Math.abs(d) < 60) {
                k.className = ""
                setTimeout(()=>{
                    k.classList.add("pf")
                },10)
                return
            }
            if  (Math.abs(d) < 120) {
                k.className = ""
                setTimeout(()=>{
                    k.classList.add("gt")
                },10)
                return
            }
            if  (Math.abs(d) < 190) {
                k.className = ""
                setTimeout(()=>{
                    k.classList.add("gd")
                },10)
                return
            }
            if  (Math.abs(d) < 250) {
                k.className = ""
                setTimeout(()=>{
                    k.classList.add("bad")
                },10)
                return
            }
        }else{
            config.beatmap[["I","II"][line]].shift()
            oo.classList.add("h")
            config.pos[line] = config.beatmap[["I","II"][line]][0].i
        }
    }
}

window.onload = main()

function scrollBg(config,asset) {
    let w = asset.bg[0].offsetWidth
    if (config.bgX1 +100 + w <0) {
        config.bgX1+=w*2
    }
    if (config.bgX2 +100 + w <0) {
        asset.bg[1].style.opacity= "0"
        config.bgX2+=w*2
        setTimeout(()=>{
            asset.bg[1].style.opacity= "1"
        },2000)
    }
    config.bgX1-=config.bgSpeed
    config.bgX2-=config.bgSpeed
    asset.bg[0].style.left = (config.bgX1) + "px"
    asset.bg[1].style.left = (config.bgX2) + "px"
}