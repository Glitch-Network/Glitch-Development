/*
console.log("Miniplayer loaded");
$(document).ready(function() {
    const style = document.createElement('style');
    style.innerHTML = `
        .window {
            background-color: rgba(19, 19, 19, 0.9);
            border-radius: 10px;
            color: white;
            width: 400px;
            height: 170px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            padding: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
            position: fixed;
        }
        .title-bar {
            cursor: grab;
            user-select: none;
            z-index: 10;
            color: white;
            display: flex;
            justify-content: space-between;
            background-color: #333;
            padding: 5px 10px;
        }
        .xbox, .maxbox {
            width: 20px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            border-radius: 50%;
            color: white;
            transition: background-color 0.3s;
            opacity: 0.9;
        }
        .xbox {
            background-color: #e74c3c;
        }
        .maxbox {
            background-color: #2ecc71;
            margin-right: 10px;
        }
        .xbox:hover, .maxbox:hover {
            opacity: 0.8;
        }
        #iframe {
            width: 100%;
            height: 100%;
        }
    `;
    document.head.appendChild(style);

    let windowCount = 0;

    function createWindow(timeInterval, title, content) {
        windowCount++;
        const newWindow = $('<div>', { class: 'window', id: 'window' + windowCount }).appendTo('body');
        newWindow.draggable().resizable();

        const titleBar = $('<div>', { class: 'title-bar' }).appendTo(newWindow);
        $('<div>').text(title).appendTo(titleBar);
        $('<div>', { class: 'xbox close', text: 'X' }).click(function() {
            newWindow.remove();
            clearInterval(timeInterval);
            localStorage.setItem("miniplayer_on", "false");
            localStorage.setItem("miniplayer_url", "");
        }).appendTo(titleBar);

        $('<div>').html(content).appendTo(newWindow);
    }

    function miniplaye(url) {
        let embedUrl = url;
        if (url.includes('youtube')) {
            embedUrl = `https://www.youtube.com/embed/${url.split("v=")[1].split('&')[0]}?controls=1&showinfo=0&autoplay=1&start=${parseInt(localStorage.getItem("time_miniplayer") || "0")}`;
        }

        timeInterval=0

        createWindow(timeInterval, 'Miniplayer', `<iframe id="iframe" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`);

    }


    function miniplayer(){
            alert("--Miniplayer--")
            let videoUrl = prompt("Enter the URL of the video", "https://www.youtube.com/watch?v=whatever");
            if (videoUrl) {
                miniplaye(videoUrl);
            }
        }
        

});


*/