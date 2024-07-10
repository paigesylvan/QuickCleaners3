import Movie from '../media/video.mp4'

export default function Loyalty() {
    <div>
        <video class="h-full w-full rounded-lg" controls autoPlay>
        <source src={Movie} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>

};
