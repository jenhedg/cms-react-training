import Image from 'next/image'

export default function Image() {

    const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
    }

    const MyImage = (props) => {
        return (
            <Image
                loader={myLoader}
                src="https://via.placeholder.com/200x250"
                alt="Picture of the author"
                width={500}
                height={500}
            />
        )
    }
}