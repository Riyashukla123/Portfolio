export default function Background(){
    return(
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-10">
                <source src="/V8.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute w-full h-[20%] bottom-0 right-0 z-10 bg-gradient-to-t from-black to-transparent via-transparent"></div>
        </>
    )
}