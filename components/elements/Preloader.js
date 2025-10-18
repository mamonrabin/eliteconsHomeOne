export default function Preloader() {
    return (
        <>
            <div className="loader-wrap">
                <div className="preloader">
                    <div id="handle-preloader" className="handle-preloader">
                        <div className="animation-preloader">
                            <div className="spinner"></div>
                            <div className="txt-loading">
                                <span data-text-preloader="T" className="letters-loading">
                                    I
                                </span>
                                <span data-text-preloader="L" className="letters-loading">
                                    T
                                </span>
                                <span data-text-preloader="I" className="letters-loading">
                                    A
                                </span>
                                <span data-text-preloader="E" className="letters-loading">
                                    S
                                </span>
                                <span data-text-preloader="C" className="letters-loading">
                                    W
                                </span>
                                <span data-text-preloader="O" className="letters-loading">
                                    E
                                </span>
                                <span data-text-preloader="N" className="letters-loading">
                                    V
                                </span>
                                
                            </div>
                        </div>   
                    </div>
                </div>
            </div>


        </>
    )
}
