import useMovieTrailer from "../hooks/useMovieTrailer"
import { useSelector } from "react-redux"

const VideoContainer = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo)
  useMovieTrailer(movieId)

  return (
    // <div className="relative w-screen h-screen">
    //   <iframe
    //     className="absolute top-0 left-0 w-screen h-screen -z-10"
    //     src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1"
    //     frameBorder="0"
    //     allow="autoplay; fullscreen"
    //   />
    // </div>
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"

        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&rel=0"
        }
        title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen>

        </iframe>
    </div>
  )
}

export default VideoContainer