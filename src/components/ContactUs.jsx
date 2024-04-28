
const ContactUs = () => {
    return (
        <div className='mx-4 md:container md:mx-auto mt-12 border-2 border-amber-500 p-6'>
            <div className="text-center">
                <h2 className="text-5xl font-bold text-center mb-4">We’d love to hear from you</h2>
                <p>We eagerly await your thoughts; your voice enriches our journey together.</p>
                <p className="my-4"><span className="font-bold text-xl">Tell Us More:</span> </p>
                <textarea className="textarea textarea-bordered md:w-96 h-24" placeholder="talk to us"></textarea>
                <div>
                    <button className="btn btn-accent text-white">Send</button>
                </div>
                <h2 className="mt-8"><span className="text-2xl font-bold">Our Address:</span> <span className="text-xl text-center">Canada</span> <br /> 500-401 West Georgia St. Vancouver, BC, Canada, V6B 5A1</h2>
                <p><span className="text-xl font-bold">Mobile:</span> +9800000000</p>
            </div>
            
        </div>
    );
};

export default ContactUs;