import React, { useState } from 'react';

function Slider() {
let [currentSlide, setCurrentSlide] = useState(0);
    let image = [
    `https://images.unsplash.com/photo-1685556636541-b141d0a09746?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80`,
    `https://plus.unsplash.com/premium_photo-1683865775786-baba37e26b0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExNXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60`,
    `https://images.unsplash.com/photo-1685511021127-ea8f746b76df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80`,
    `https://images.unsplash.com/photo-1682366748076-8773692a7594?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80`,
    `https://images.unsplash.com/photo-1682687982502-1529b3b33f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80`,
    `https://images.unsplash.com/photo-1685316494198-a71c8344aa9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80`,
    `https://images.unsplash.com/photo-1680790960435-e5b9670138b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80`,
    `https://images.unsplash.com/photo-1678644897769-8eeaa24b1980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=929&q=80`,
    `https://images.unsplash.com/photo-1685337835257-efda7542b0b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
    ]

    let nextSlide = () => {
    setCurrentSlide((prevSlide) => 
    prevSlide === image.length - 1 ? 0 : prevSlide + 1
    );
    };

    let prevSlide = () => {
    setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? image.length - 1 : prevSlide - 1
    );
    };

    return (
    <div className="slider">
        <span>Слайдер</span>
        <img src={image[currentSlide]} alt="Slide" className="slide" />
        <button className="prev" onClick={prevSlide}>Prev</button>
        <button className="next" onClick={nextSlide}>Next</button>
    </div>
    );
};

export default Slider;