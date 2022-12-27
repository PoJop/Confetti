document.addEventListener("DOMContentLoaded", () => {
    const confetti = []
    const style = []
    const color = ["#50FFAB", "#37C9E9", "#506CFF", "#FF507A", "#FFD950"]
    for (let i = 0; i < 250; i++) {
        let fram = `span${i}`
        confetti.push(`
                <span style="left:${Math.floor(Math.random() * window.innerWidth)}px; animation: ${fram} 3.${String(Math.random()).substring(2, 4)}s ease-in-out infinite;
                
                animation-iteration-count: 1;
                animation-fill-mode:forwards;
                    display: block;
                    background-color:${color[Math.floor(Math.random() * color.length)]};
                "  
                id="confetti" class=""></span>`)
        style.push(
            `@keyframes ${fram} {
                from { transform: rotate3d(1, 0, 1, ${Math.floor(Math.random() * 1000) + 62}deg); top: ${Math.floor((Math.random() * -window.innerHeight))}px; opacity: 1;} 
                to { transform: rotate3d(1, 2, 0, 0deg); top: ${window.innerHeight - 50}px; opacity: .4;}}
            `)
    }
    let arr = ''
    style.forEach(e => arr += e)
    document.querySelector('.style').innerHTML = `${arr}`
    document.querySelector(".confetti").innerHTML = `${confetti.join().replace(/,/g, " ")}`
})