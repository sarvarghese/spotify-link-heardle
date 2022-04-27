import { useModalData } from "./ModalContext";

function HowToPlay() {

    const { dispatch, state: { currentModal } } = useModalData();

    const onStart = () => {
        dispatch({ type: 'Reset' })
        localStorage.setItem("played", 'true')
    }

    if (currentModal !== "HowToPlay") {
        return <></>
    }

    return (
        <div className="modal-background p-3 pointer-events-none">
            <div className="pointer-events-auto modal max-w-screen-xs w-full mx-auto top-20 relative rounded-sm" role="dialog" aria-modal="true">
                <div className="bg-custom-bg border border-custom-mg p-6 rounded">
                    <div className="flex items-center justify-center mb-6">
                        <div className="flex-1 pl-7">
                            <h2 className="text-sm text-center uppercase text-custom-line font-semibold tracking-widest">HOW TO PLAY</h2>
                        </div>
                        <div className="justify-self-end flex">
                            <button autoFocus="" className="border-none text-custom-mg" type="button" aria-label="fourth" title="Kapat"
                                onClick={() => onStart()}>
                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="mr-4 w-8 text-custom-line">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                                    <circle cx="5.5" cy="17.5" r="2.5"></circle>
                                    <circle cx="17.5" cy="15.5" r="2.5"></circle>
                                    <path d="M8 17V5l12-2v12"></path>
                                </svg>
                            </div>
                            <div>
                                <p>
                                    Listen to the intro, then find the correct Joywave song in the list.
                                </p>
                            </div>
                        </div>
                        {/* <div className="flex items-center mb-6">
                            <div className="mr-4 w-8 text-custom-line">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="4 7 4 4 20 4 20 7"></polyline>
                                    <line x1="9" y1="20" x2="15" y2="20"></line>
                                    <line x1="12" y1="4" x2="12" y2="20"></line>
                                </svg>
                            </div>
                            <div>
                                <p>
                                After typing your guesses in the search box and choosing one of the problems, press the send button.
                                </p>
                            </div>
                        </div> */}
                        <div className="flex items-center mb-6">
                            <div className="mr-4 w-8 text-custom-line">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                </svg>
                            </div>
                            <div>
                                <p>
                                    Skipped or incorrect attempts unlock more of the intro
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center mb-6">
                            <div className="mr-4 w-8 text-custom-line">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-7">
                                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                </svg>
                            </div>
                            <div>
                                <p>Answer in as few tries as possible and share your score!</p>
                            </div>
                        </div>
                        <div className="justify-center flex py-2 mt-2">
                            <button className="px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm bg-custom-positive"
                                type="button" aria-label="start" title="start"
                                onClick={() => onStart()}>
                                Start
                            </button>
                        </div>
                    </div>
                    <p className="text-xs mt-3 text-center text-custom-line">
                        By using this application &  to increase your user experience, you agree to use the following services:
                        <a href="https://policies.google.com/technologies/partner-sites"> Google</a>, <a href="https://developer.spotify.com/documentation/widgets/terms/"> Spotify,</a> and
                        <a href="https://soundcloud.com/pages/privacy"> Soundcloud</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HowToPlay;