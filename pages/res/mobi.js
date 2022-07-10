if (/Mobi/.test(navigator.userAgent)) {
    link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "/res/mobi.css"
    document.getElementsByTagName("head")[0].appendChild(link)
}
