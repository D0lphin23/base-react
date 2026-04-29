import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./App.css";

const withSlider = (BaseComponent, getData) => {
    return (props) => {
        const [slide, setSlide] = useState(0);
        const [autoplay, setAutoplay] = useState(false);

        useEffect(() => {
            setSlide(getData());
        }, []);

        function changeSlide(i) {
            setSlide((slide) => slide + i);
        }

        return (
            <BaseComponent
                {...props}
                slide={slide}
                autoplay={autoplay}
                setAutoplay={setAutoplay}
                changeSlide={changeSlide}
            />
        );
    };
};

const getDataFromFirstFetch = () => {
    return 10;
};
const getDataFromSecondFetch = () => {
    return 20;
};

const SliderFirst = (props) => {
    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img
                    className="d-block w-100"
                    src="https://moya-planeta.ru/upload/images/xl/f2/35/f23517edb8332a14cb688c305f1e4bb6f97e4658.jpg"
                    alt="slide"
                />
                <div className="text-center mt-5">
                    Active slide {props.slide}
                </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(-1)}
                    >
                        -1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(1)}
                    >
                        +1
                    </button>
                </div>
            </div>
        </Container>
    );
};

const SliderSecond = (props) => {
    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img
                    className="d-block w-100"
                    src="https://moya-planeta.ru/upload/images/xl/f2/35/f23517edb8332a14cb688c305f1e4bb6f97e4658.jpg"
                    alt="slide"
                />
                <div className="text-center mt-5">
                    Active slide {props.slide} <br />
                    {props.autoplay ? "auto" : null}{" "}
                </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(-1)}
                    >
                        -1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(1)}
                    >
                        +1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() =>
                            props.setAutoplay((autoplay) => !props.autoplay)
                        }
                    >
                        toggle autoplay
                    </button>
                </div>
            </div>
        </Container>
    );
};

const SliderWithFirstFetch = withSlider(SliderFirst, getDataFromFirstFetch);
const SliderWithSecondFetch = withSlider(SliderSecond, getDataFromSecondFetch);

const withLogger = (WrappedComponent) => (props) => {
    useEffect(() => {
        console.log("render");
    }, [props]);

    return <WrappedComponent {...props} />;
};

const Hello = () => {
    return <h1>Hello</h1>;
};

const HelloWithLogger = withLogger(Hello);

function App() {
    return (
        <>
            <HelloWithLogger />
            <SliderWithFirstFetch />
            <SliderWithSecondFetch />
        </>
    );
}

export default App;
