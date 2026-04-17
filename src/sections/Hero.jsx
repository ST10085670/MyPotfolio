export const Hero = () => {
    return (
    <section 
    id="hero"
    className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center space-y-6">
            {/* Top Text */}
            <p className="text-lg text-muted-foreground">Welcome to my portfolio!</p>

            {/* Profile Image */}
            <div className="flex justify-center-safe">
                <img
                    src="ImgMe.jpg"
                    alt="Profile Image"
                    className="rounded-3xl w-80 h-80 object-cover shadow-lg"
                />
            </div>
            {/* Name and Title */}
            <h1 className="text-4xl font-bold">
                Aphiwe <span className="text-primary"> Tandisizwe</span> <span className="text-primary"> Mhotwana</span>
            </h1>
            <p className="text-xl text-muted-foreground">Full Stack Developer | Computer Science Graduate</p>
        </div>
    </section>);
};