export default function Footer(props) {
    return (
        <div className="text-dtp px-4 md:px-32 pt-40 pb-8 md:flex items-center my-auto flex-col"
             style={{background: 'linear-gradient(180deg, transparent, #29b5411c)'}}>
            <div className="grow"></div>
            <div className="text-lts text-sm">
                wa-link.in is neither associated with nor sponsored by WhatsApp LLC or Meta Platforms, Inc. We offer
                a service based on WhatsApp’s public API.
                By using our service, you are accepting our terms of service and privacy policy.
            </div>
            <div className="grow"></div>
        </div>
    );
}