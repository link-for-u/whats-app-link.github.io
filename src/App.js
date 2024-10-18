import logo from './logo.svg';
import './App.css';
import CreateLinkForm from "./components/create-link-form";
import Footer from "./components/footer";
import FAQ from "./components/faq";

function App() {
    return (
        <div className="App">
            <div className="min-h-screen container px-4 md:px-8 md:py-28">
                <div className="rounded overflow-hidden">
                    <div className="md:flex items-center">
                        <div
                            className="md:w-1/2 pb-8 md:px-12 pt-20 md:pt-0 flex flex-col md:items-start">
                            <h1 className="text-center md:text-left text-6xl md:text-8xl font-bold">
                                <img
                                    src="./android-chrome-512x512.png"
                                    className="flex-grow m-auto md:ml-0 h-[50px] w-[50px]"
                                />
                                Create<br/>
                                WhatsApp <br/>
                                Links
                            </h1>
                            <p className="mt-4 mb-4 text-xl text-center md:text-left uppercase text-lts">
                                Global choice for generating<br/>
                                <span className="bg-accent px-2 text-white font-bold rounded">Free</span> WhatsApp Links<br/>
                                with custom messages
                            </p>
                            <div className="flex flex-col mt-4 mx-auto md:mx-0">
                                <a href="#create-link-form" onClick={() => {
                                    window.gtag("event", "create_link_cta");
                                }}>
                                    <div className="bg-accent text-xl font-semibold text-white px-4 py-2 rounded
                                 hover:cursor-pointer hover:opacity-90">
                                        Create Link Now
                                    </div>
                                </a>
                            </div>
                        </div>
                        <a href="#create-link-form">
                            <div className="h-[50vh] w-full md:h-[70vh] md:w-[70vh] mx-auto md:w-1/2 flex">
                                <img alt="Create WhatsApp Links"
                                     src="./images/wa-logo.svg"
                                     className="flex-grow m-auto hover:scale-105 transform transition
                                 h-[200px] w-[200px] md:h-[400px] md:w-[400px]"/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <CreateLinkForm/>
            <FAQ/>
            <Footer/>
        </div>
    );
}

export default App;
