const comicButtonStyles = {
    fontFamily: "Font Awesome 6 Pro",
    fontWeight: "900",
    height: 25,
    width: 25,
    backgroundColor: "red",
    borderRadius: "50%"
}

export default function Button() {
    return (
        <button style={comicButtonStyles}>
            <i className="fa-regular fa-bolt-lightning"></i>
        </button>
    )
}