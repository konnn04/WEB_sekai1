document.INTERVAL = {}

let container1 = document.querySelector(".game .line1 .container")
let container2 = document.querySelector(".game .line2 .container")
const beatmap = [{'l':0,'t':0.988898},{'l':0,'t':1.772878},{'l':0,'t':2.574335},{'l':0,'t':3.437467},{'l':0,'t':4.273204},{'l':0,'t':5.058358},{'l':0,'t':5.910366},{'l':0,'t':6.74257},{'l':1,'t':6.749693},{'l':0,'t':7.558419},{'l':0,'t':8.394897},{'l':0,'t':9.203169},{'l':0,'t':10.004799},{'l':0,'t':10.843614},{'l':0,'t':11.687891},{'l':0,'t':12.481177},{'l':1,'t':12.481177},{'l':1,'t':13.317787},{'l':1,'t':13.732038},{'l':0,'t':14.146837},{'l':1,'t':14.53993},{'l':1,'t':15.170382},{'l':1,'t':15.388939},{'l':0,'t':15.791248},{'l':0,'t':16.197059},{'l':1,'t':16.629685},{'l':1,'t':17.016538},{'l':0,'t':17.427094},{'l':1,'t':18.003852},{'l':1,'t':18.444883},{'l':1,'t':18.654799},{'l':0,'t':19.076084},{'l':1,'t':19.261174},{'l':1,'t':19.454673},{'l':0,'t':19.669273},{'l':1,'t':19.897135},{'l':1,'t':20.284163},{'l':0,'t':20.670449},{'l':1,'t':21.092105},{'l':1,'t':21.927795},{'l':0,'t':22.360746},{'l':0,'t':22.972213},{'l':1,'t':23.170437},{'l':1,'t':23.59197},{'l':0,'t':24.006457},{'l':1,'t':24.197361},{'l':1,'t':24.918028},{'l':1,'t':25.167268},{'l':0,'t':25.635753},{'l':1,'t':25.81676},{'l':1,'t':26.049663},{'l':0,'t':26.273632},{'l':1,'t':26.483579},{'l':1,'t':26.86174},{'l':0,'t':27.272307},{'l':1,'t':27.667967},{'l':0,'t':27.697923},{'l':1,'t':28.138954},{'l':1,'t':28.515207},{'l':0,'t':28.909933},{'l':1,'t':28.909933},{'l':1,'t':29.299854},{'l':1,'t':29.723524},{'l':1,'t':30.135981},{'l':0,'t':30.558712},{'l':1,'t':30.558712},{'l':1,'t':30.944523},{'l':1,'t':31.3682},{'l':1,'t':31.800485},{'l':0,'t':32.214134},{'l':1,'t':32.241302},{'l':1,'t':32.601578},{'l':1,'t':33.03115},{'l':1,'t':33.464365},{'l':0,'t':33.859368},{'l':1,'t':34.247159},{'l':0,'t':34.688189},{'l':1,'t':35.09404},{'l':0,'t':35.470163},{'l':1,'t':35.910554},{'l':0,'t':36.318302},{'l':1,'t':36.337522},{'l':1,'t':36.749959},{'l':0,'t':36.765757},{'l':1,'t':37.145893},{'l':0,'t':37.163888},{'l':1,'t':37.586153},{'l':0,'t':37.613774},{'l':1,'t':37.973465},{'l':0,'t':38.000882},{'l':1,'t':38.394676},{'l':0,'t':38.414561},{'l':1,'t':38.791391},{'l':0,'t':39.134418},{'l':1,'t':39.621933},{'l':1,'t':40.004803},{'l':0,'t':40.428389},{'l':1,'t':40.832844},{'l':1,'t':41.588117},{'l':1,'t':41.780499},{'l':0,'t':42.143144},{'l':0,'t':42.308056},{'l':0,'t':42.714521},{'l':1,'t':42.895979},{'l':0,'t':43.271247},{'l':1,'t':43.6613},{'l':0,'t':44.057179},{'l':1,'t':44.695421},{'l':1,'t':44.89271},{'l':0,'t':45.326049},{'l':0,'t':45.511754},{'l':0,'t':45.701557},{'l':1,'t':46.196953},{'l':1,'t':46.602604},{'l':0,'t':47.034233},{'l':1,'t':47.222314},{'l':1,'t':48.078054},{'l':1,'t':48.267148},{'l':0,'t':48.680763},{'l':1,'t':48.85972},{'l':0,'t':49.24696},{'l':1,'t':49.501204},{'l':0,'t':49.563282},{'l':0,'t':50.264225},{'l':1,'t':50.271803},{'l':1,'t':51.10107},{'l':0,'t':51.119128},{'l':1,'t':51.947619},{'l':1,'t':52.350517},{'l':0,'t':52.784483},{'l':1,'t':53.611786},{'l':0,'t':53.638499},{'l':1,'t':53.979274},{'l':1,'t':54.428573},{'l':1,'t':54.827968},{'l':0,'t':55.214874},{'l':1,'t':55.403308},{'l':1,'t':55.637151},{'l':1,'t':56.035879},{'l':1,'t':56.465108},{'l':1,'t':56.850971},{'l':0,'t':56.869872},{'l':1,'t':57.256893},{'l':1,'t':57.687294},{'l':1,'t':58.094235},{'l':1,'t':58.498832},{'l':0,'t':58.515479},{'l':1,'t':59.389389},{'l':0,'t':60.198553},{'l':1,'t':60.577026},{'l':1,'t':60.973333},{'l':1,'t':61.386819},{'l':0,'t':61.781757},{'l':1,'t':62.19576},{'l':1,'t':62.621347},{'l':1,'t':63.061778},{'l':1,'t':63.445986},{'l':0,'t':63.464973},{'l':1,'t':63.852746},{'l':1,'t':64.26537},{'l':1,'t':64.668077},{'l':0,'t':65.067617},{'l':0,'t':65.291852},{'l':0,'t':65.453326},{'l':1,'t':65.876382},{'l':0,'t':66.75854},{'l':1,'t':67.137684},{'l':1,'t':67.791843},{'l':1,'t':67.981704},{'l':0,'t':68.395274},{'l':1,'t':69.180408},{'l':1,'t':69.591045},{'l':0,'t':70.033229},{'l':1,'t':70.22998},{'l':1,'t':70.643533},{'l':1,'t':71.069188},{'l':1,'t':71.285749},{'l':0,'t':71.716345},{'l':1,'t':71.897594},{'l':1,'t':72.09639},{'l':0,'t':72.291454},{'l':1,'t':72.481346},{'l':1,'t':72.896042},{'l':1,'t':73.326114},{'l':0,'t':73.372991},{'l':1,'t':73.685284},{'l':1,'t':74.397713},{'l':1,'t':74.579024},{'l':0,'t':74.955886},{'l':1,'t':75.802729},{'l':1,'t':76.204516},{'l':1,'t':76.593218},{'l':1,'t':77.016962},{'l':1,'t':77.384846},{'l':0,'t':77.412324},{'l':0,'t':78.259691},{'l':0,'t':78.662641},{'l':1,'t':79.060314},{'l':1,'t':79.489888},{'l':0,'t':79.904519},{'l':1,'t':79.904519},{'l':0,'t':80.317627},{'l':0,'t':80.733555},{'l':0,'t':81.139152},{'l':0,'t':81.533245},{'l':0,'t':81.939955},{'l':1,'t':82.343695},{'l':1,'t':82.756569},{'l':0,'t':83.163727},{'l':0,'t':83.55894},{'l':0,'t':83.964137},{'l':0,'t':84.41326},{'l':0,'t':84.854336},{'l':0,'t':85.221827},{'l':1,'t':85.636328},{'l':0,'t':85.644166},{'l':1,'t':86.04213},{'l':1,'t':86.464135},{'l':1,'t':86.879503},{'l':0,'t':87.300501},{'l':0,'t':87.706629},{'l':1,'t':88.093995},{'l':0,'t':88.128265},{'l':1,'t':88.52341},{'l':0,'t':88.909848},{'l':1,'t':88.922366},{'l':1,'t':89.77741},{'l':0,'t':89.803483},{'l':0,'t':90.605556},{'l':1,'t':90.61333},{'l':1,'t':91.394198},{'l':1,'t':91.592176},{'l':1,'t':91.837397},{'l':0,'t':92.230443},{'l':1,'t':92.610763},{'l':0,'t':93.105541},{'l':1,'t':93.215033},{'l':1,'t':93.39329},{'l':1,'t':93.56634},{'l':1,'t':93.852074},{'l':1,'t':94.258188},{'l':0,'t':94.381732},{'l':1,'t':94.63356},{'l':1,'t':95.093638},{'l':1,'t':95.501776},{'l':0,'t':95.922212},{'l':1,'t':96.256228},{'l':0,'t':96.704211},{'l':1,'t':97.370544},{'l':1,'t':97.549069},{'l':0,'t':97.973746},{'l':1,'t':98.18198},{'l':1,'t':98.350026},{'l':0,'t':98.56593},{'l':1,'t':98.782762},{'l':1,'t':99.19739},{'l':0,'t':99.576092},{'l':1,'t':99.602516},{'l':1,'t':100.005782},{'l':1,'t':100.4203},{'l':1,'t':100.833975},{'l':0,'t':101.240387},{'l':1,'t':101.240387},{'l':1,'t':102.122089},{'l':0,'t':102.150671},{'l':1,'t':102.885735},{'l':0,'t':102.912056},{'l':1,'t':103.696845},{'l':0,'t':103.732529},{'l':1,'t':104.56109},{'l':0,'t':104.982704},{'l':1,'t':105.369822},{'l':0,'t':105.397157},{'l':0,'t':106.232879},{'l':1,'t':106.591862},{'l':0,'t':106.685579},{'l':1,'t':107.053227},{'l':1,'t':107.447108},{'l':0,'t':107.474214},{'l':1,'t':107.827817},{'l':1,'t':108.220852},{'l':0,'t':108.24874},{'l':1,'t':108.62081},{'l':0,'t':109.049619},{'l':1,'t':109.049619},{'l':1,'t':109.444987},{'l':1,'t':109.879226},{'l':0,'t':109.904605},{'l':1,'t':110.299547},{'l':1,'t':110.713926},{'l':0,'t':110.733885},{'l':1,'t':111.094041},{'l':0,'t':111.262951},{'l':0,'t':111.515159},{'l':0,'t':111.949186},{'l':1,'t':111.949186},{'l':0,'t':112.406405},{'l':1,'t':112.776812},{'l':0,'t':112.802857},{'l':1,'t':113.190509},{'l':1,'t':113.59317},{'l':0,'t':113.612392},{'l':1,'t':113.999922},{'l':0,'t':114.405322},{'l':1,'t':114.405322},{'l':1,'t':114.827921},{'l':1,'t':115.214293},{'l':0,'t':115.241366},{'l':1,'t':115.643933},{'l':1,'t':116.061762},{'l':0,'t':116.078613},{'l':1,'t':116.43819},{'l':1,'t':116.898287},{'l':0,'t':116.914084},{'l':1,'t':117.257399},{'l':1,'t':117.67915},{'l':0,'t':117.726764},{'l':1,'t':118.066041},{'l':0,'t':118.086583},{'l':1,'t':118.516382},{'l':0,'t':118.535057},{'l':0,'t':119.343566},{'l':0,'t':120.240387},{'l':0,'t':121.054936},{'l':0,'t':121.854663}]

async function main(){
    const config = {        
        bgSpeed:200,
        bgX1:0,
        bgX2:document.querySelectorAll("#bg .img")[0].offsetWidth,       
        g:.25,
        a:0,
        key:{},
        playing:false,
        timer:0,
        beat:0,
        press:[false,false],
        volumeSfx: .5,
        volumeMusic: .4,
        query:8,
        speed:700,
        beatmap: {
            "I":[],
            "II":[]
        }
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

    beatmap.forEach((e,i)=>{
        if (e.l == 0) config.beatmap["I"].push(e.t); else config.beatmap["II"].push(e.t)
    })
    
    let t = ""
    config.beatmap["I"].forEach((e,i)=>{
        t+=`<div class="box" style="left: ${e*config.speed}px"></div>`
    })
    container1.innerHTML = t
    t= ""
    config.beatmap["II"].forEach((e,i)=>{
        t+=`<div class="box" style="left: ${e*config.speed}px"></div>`
    })
    container2.innerHTML = t
    asset.bg[1].style.left = asset.bg[1].offsetWidth+ "px"
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
    let s = "["
    
    let bpm = dataGame[config.query].bpm / 60 / 3
    document.INTERVAL = setInterval(()=>{
        let k = config.key["d"] || config.key["f"]
        if (k) {
            config.a = 0
            asset.player.style.top = asset.ground.offsetTop - 500 +"px";
            asset.cycle[1].classList.add("press")
            if (k!= config.press[0]) {
                if (!config.press[0]) playSfx(asset.hit1,config.volumeSfx)
                s+=`{'l':0,'t':${asset.audio.currentTime}},`
                config.press[0] = true                
            }
        }else{
            asset.cycle[1].classList.remove("press")
            config.press[0] = false
        }
        k = config.key["j"] || config.key["k"]
        if (k) {
            asset.player.style.top = asset.ground.offsetTop - asset.player.offsetHeight +"px";
            asset.player.classList.add("press")
            asset.cycle[0].classList.add("press")
            if (k!= config.press[1]) {
                if (!config.press[1]) playSfx(asset.hit2,config.volumeSfx)
                s+=`{'l':1,'t':${asset.audio.currentTime}},`
                config.press[1] = true                
            }
        }else{
            asset.cycle[0].classList.remove("press")
            config.press[1] = false
        }

        if (config.key["d"] || config.key["f"] ||config.key["j"] || config.key["k"]) {
            asset.player.classList.add("press")
            // console.log(s)
        }else{
            asset.player.classList.remove("press")
        }

        if ((config.key["d"] || config.key["f"]) && (config.key["j"] || config.key["k"])) {
            asset.subPlayer.classList.add("press")
        }else{
            asset.subPlayer.classList.remove("press")

        }

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

        if (config.playing) {
            config.timer = asset.audio.currentTime
            container1.style.left = (-config.timer*config.speed + asset.lineHit.offsetLeft)+ "px"
            container2.style.left = (-config.timer*config.speed + asset.lineHit.offsetLeft)+ "px"
            if (config.beatmap["I"][0] < config.timer) {
                config.beatmap["I"].shift()
                config.key["j"] = true
                setTimeout(()=>{
                    config.key["j"] = false
                },50)
            }
            if (config.beatmap["II"][0] < config.timer) {
                config.beatmap["II"].shift()
                config.key["d"] = true
                setTimeout(()=>{
                    config.key["d"] = false
                },50)
            }
            
            if (config.timer - config.beat >= bpm) {
                config.beat = config.timer
            }    
        }

        if ( !config.playing && config.key[" "]) {
            config.playing = true
            config.beat = -.6
            playSfx(asset.audio,.4)
        }       

        if (config.key["o"]) console.log(s)
    },1000/120)
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