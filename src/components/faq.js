export default function FAQ(props) {
    return (
        <div className="container mt-20 px-4 md:px-32 py-16 h-fit md:min-h-screen md:flex flex-col items-center">
            <h3 className="text-4xl font-bold grow text-center md:text-left">
                <div className="text-dts text-3xl text-center">FAQ</div>
                <div>Answers to a few good questions.</div>
            </h3>
            <div className="w-full mt-8 text-lg px-2">
                <div className="font-bold text-xl">How much does wa-link.in charge for links?</div>
                <div className="mb-8 opacity-80">
                    The links that you create with the generator in create.wa-link.in are totally <b>free</b>.
                </div>

                <div className="font-bold mt-4 text-xl">What is the custom message?</div>
                <div className="mb-8 opacity-80">
                    It’s a default message that appears on the user’s text input field once they click on your link and
                    open the chat.
                    This way it’s easier for them to start a conversation and you will know exactly where the user came
                    from.
                </div>

                <div className="font-bold mt-4 text-xl">How to add a WhatsApp link (wa-link.in) to the Instagram
                    bio?
                </div>
                <div className="mb-8 opacity-80">
                    One of the most common places to use your WhatsApp links generated with wa-link.in, is the
                    Instagram profile.
                    Note that this social network only admits 1 link in the bio, so if you already have a link there,
                    you will have to replace it.
                    <br/>
                    Go to your Instagram profile, then click "Edit Profile", and fill the input for "Website" with the
                    wa-link.in you just made.
                    <br/>
                    <br/>
                    Remember that if you don't fill the "Website" field, your users won't be able to click your link and
                    you will miss the opportunity of an immediate contact with your clients.
                </div>

                <div className="font-bold mt-4 text-xl">Does wa-link.in work in my country?</div>
                <div className="mb-8 opacity-80">
                    wa-link.in generated links work on any country where WhatsApp is officially available.
                </div>

                <div className="font-bold mt-4 text-xl">Can I delete a wa-link.in link?</div>
                <div className="mb-8 opacity-80">
                    If you just created a wa-link.in link and realize that you added the wrong info or just won't use it,
                    you don’t have to delete it. Just create a new link with new information and don’t use/share the
                    previous link.
                </div>
            </div>
        </div>
    );
}