export const anchorNavigate = (path, newtab = false) => {
    newtab ? window.open(path) :
        window.location.href = window.location.protocol + "//" + window.location.host + path
}