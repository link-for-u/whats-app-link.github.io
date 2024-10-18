import {countriesList} from "../countries";
import {useState} from "react";
import {FaChevronDown} from 'react-icons/fa';
import Modal from "./modal";

export default function CreateLinkForm(props) {
    const [country, setCountry] = useState({flag: "🇮🇳", dialCode: "+91"});
    const [modalConfig, setModalConfig] = useState({show: false});
    const [shortLink, setShortLink] = useState(undefined);

    const updateCountry = (flag, dialCode) => {
        setCountry({flag: flag, dialCode: dialCode});
    }

    const toggleModal = () => {
        setModalConfig({show: !modalConfig.show});
    }

    const cleanupForm = () => {
        document.getElementById("short-link-form").reset();
    }

    const cleanupShortLink = () => {
        setShortLink(undefined);
    }

    const generateShortLink = async () => {
        window.gtag("event", "create_link");
        let number = document.getElementById('sl-number').value;
        let message = document.getElementById('sl-message').value;
        let countryCode = country.dialCode.replace("+", "");

        if (!!number && !!message && !!country.dialCode) {
            toggleModal();

            const originalURL = `https://api.whatsapp.com/send?phone=${countryCode}${number}&text=${encodeURIComponent(message)}`;
            const options = {
                method: "POST",
                headers: {
                    "Authorization": "pk_oxe1tTnsAdfMedCO",
                    "accept": "application/json", "content-type": "application/json"
                },
                body: JSON.stringify({
                    domain: 'wa-link.in',
                    originalURL: originalURL
                }),
            };
            let response = await fetch("https://api.short.io/links/public", options);
            let data = await response.json();
            let shortLink = data['shortURL'];
            setShortLink(shortLink);

            cleanupForm();
        }
    }

    return (
        <div className="container">
            <div className="h-[10vh]" id="create-link-form"></div>
            <div className="flex flex-col items-center mx-4">
                <form id="short-link-form" onSubmit={(e) => {
                    e.preventDefault();
                    generateShortLink();
                }}>
                    <div className="mb-2 font-semibold text-xl">Type your WhatsApp phone number</div>
                    <div className="relative flex rounded border border-dts"
                         style={{background: 'linear-gradient(90deg, #dddddd, transparent)'}}>
                        <button type="button" value="cancel" className="pl-4 p-2 peer transition-all duration-100 flex">
                            <span className="text-4xl">{country.flag}</span>
                            <div className="my-auto flex">
                                <span className="ml-4">{country.dialCode}</span>
                                <span className="mx-2 my-auto"><FaChevronDown/></span>
                            </div>
                        </button>
                        <div className="w-50 md:w-80 bg-white absolute top-5 z-10 after:content-[''] after:inline-block after:absolute after:top-0
                    after:bg-white/40 after:w-50 after:h-full after:-z-20 after:blur-[2px] after:rounded-lg
                    peer-focus:top-12 peer-focus:opacity-100 peer-focus:visible transition-all duration-300
                    invisible opacity-0">
                            <ul className="py-6 px-3 flex flex-col gap-3 max-h-[40vh] overflow-scroll border rounded border-dts">
                                {countriesList.map((x, index) => {
                                    return (
                                        <li key={`cc-${index}`}
                                            onClick={() => updateCountry(x.flag, x.dial_code)}
                                            className='cursor-pointer px-1 rounded-md text-white flex'>
                                            <div className="flex">
                                                <div className="text-4xl mr-2 my-auto">{x.flag}</div>
                                                <div
                                                    className="my-auto leading-4 text-black">{x.name.substring(0, 15)}</div>
                                            </div>
                                            <span className="grow"></span>
                                            <span className="my-auto font-semibold text-black">{x.dial_code}</span>
                                        </li>);
                                })}
                            </ul>
                        </div>
                        <div className="grow"></div>
                        <input id="sl-number"
                               className="pl-4 w-full bg-white border-none rounded-tr rounded-br"
                               placeholder="9 X X X X X X X X X"
                               type="number" required/>
                    </div>
                    <div className="mt-6 mb-2 font-semibold text-xl">Custom Message</div>
                    <textarea id="sl-message" name="custom-message" rows="10"
                              required
                              className="rounded border border-dts px-3 py-2 w-[94vw] md:w-[27vw]"
                              placeholder="Add a custom message that users will send you"
                    ></textarea>
                    <div className="mt-2 text-xs md:text-sm text-center">Example: Hello! I would like to know more about
                        the
                        product.
                    </div>
                    <br/>
                    <button type="submit">
                        <div className="bg-accent text-xl font-semibold text-white px-4 py-2 rounded
                                 hover:cursor-pointer hover:opacity-90">
                            Generate Link 🔗
                        </div>
                    </button>
                </form>
            </div>
            {modalConfig.show &&
                <Modal toggleModal={toggleModal} shortLink={shortLink} cleanupShortLink={cleanupShortLink}/>}
        </div>
    );
}
