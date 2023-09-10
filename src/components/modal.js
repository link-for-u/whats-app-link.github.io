import {Fragment, useEffect, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import QRCode from "react-qr-code";

export default function Modal(props) {
    const [linkCopied, setLinkCopied] = useState(false);
    const [linkDownloaded, setLinkDownloaded] = useState(false);

    const download = () => {
        const svg = document.getElementById('qr-code');
        const data = (new XMLSerializer()).serializeToString(svg);
        const svgBlob = new Blob([data], {
            type: 'image/svg+xml;charset=utf-8'
        });

        // convert the blob object to a dedicated URL
        const url = URL.createObjectURL(svgBlob);

        // load the SVG blob to a flesh image object
        const img = new Image();
        img.addEventListener('load', () => {
            // draw the image on an ad-hoc canvas
            const bbox = svg.getBBox();

            const canvas = document.createElement('canvas');
            canvas.width = 10 * bbox.width + 20;
            canvas.height = 10 * bbox.height + 20;

            const context = canvas.getContext('2d');
            context.fillStyle = "white";
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, 10, 10, 10 * bbox.width, 10 * bbox.height);

            URL.revokeObjectURL(url);

            // trigger a synthetic download operation with a temporary link
            const a = document.createElement('a');
            a.download = "whats-app-link-" + props.shortLink.split('/').at(-1) + ".png";
            document.body.appendChild(a);
            a.href = canvas.toDataURL();
            a.click();
            a.remove();
            setLinkDownloaded(true);
        });
        img.src = url;
    };

    return (
        <Transition appear show as={Fragment}>
            <Dialog
                as="div"
                className="relative z-50"
                onClose={() => {
                    if (linkCopied || linkDownloaded) {
                        props.toggleModal();
                        props.cleanupShortLink();
                    }
                }}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/50"/>
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className="w-full md:w-full max-w-lg transform overflow-hidden rounded bg-lbp p-0 text-left align-middle shadow transition-all flex flex-col px-4">
                                <Dialog.Title className="font-semibold text-left text-2xl my-6">
                                    Here is your WhatsApp Short Link
                                </Dialog.Title>

                                <div className="text-lts text-lg md:text-lg">
                                    Copy and share it on your social media, website, emails or anywhere you want to be
                                    contacted instantly by your customers.
                                </div>

                                <div className="mt-4 mb-6 text-2xl font-bold">
                                    {!!props.shortLink ? props.shortLink.replaceAll("https://", "") : 'Generating. . .'}
                                </div>

                                {!!props.shortLink && <>
                                    <div className="mx-auto mb-8">
                                        <QRCode id="qr-code" level="M" value={props.shortLink}
                                                style={{height: "auto", maxWidth: "70%", width: "70%"}}
                                                className="mx-auto" viewBox={`0 0 1024 1024`}/>
                                    </div>
                                    <div className="flex mb-4">
                                        <div className={`${linkCopied ? 'bg-darkaccent' : 'bg-accent'} my-auto text-lg font-semibold text-white px-2 py-1 rounded
                                 hover:cursor-pointer hover:opacity-90`}
                                             onClick={() => {
                                                 navigator.clipboard.writeText(props.shortLink);
                                                 setLinkCopied(true);
                                             }}>
                                            {linkCopied ? 'Copied 👍' : 'Copy Link'}
                                        </div>
                                        <div
                                            onClick={() => download()}
                                            className="border border-accent text-accent border-2 ml-4 text-lg font-semibold px-2 py-1 rounded hover:cursor-pointer hover:opacity-90">
                                            Download
                                        </div>
                                        {/*       <a href={props.shortLink} target="_blank"*/}
                                        {/*          className="border border-accent text-accent border-2 ml-4 text-lg font-semibold px-2 py-1 rounded*/}
                                        {/*hover:cursor-pointer hover:opacity-90">*/}
                                        {/*           Open on WhatsApp*/}
                                        {/*       </a>*/}
                                    </div>
                                </>}
                                <br/>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
