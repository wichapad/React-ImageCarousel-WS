import ImageData from "./ImageData"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useState } from 'react'

const ImageSlider = () => {
    const [current, setCurrent] = useState(0) //เก็บลำดับภาพ 
    const length = ImageData.length //เก็บจำนวน index ใน ImageData


    const prevSlide = () => { //กดลูกศรซ้ายจะลดค่า state ทีละ 1 
        // if(current === 0){ 
        //     setCurrent(length -1)
        // } else{
        //     setCurrent(current - 1);
        // }
        //เขียน If eles แบบลดรูป
        current === 0 ? setCurrent(length - 1) : setCurrent(current - 1) //ถ้า slideLeft อยู่ index 0 จะให้ slide ไปภาพ Index สุดท้าย คือ -1 แต่ถ้าไม่ใช่ ให้ index - ทีละ 1 ต่อ  

    }
    const nextSlide = () => { //กดลูกศรขวาจะเพิ่มค่า state ทีละ 1 
        // if (current === length - 1) {
        //     setCurrent(0);
        // } else {
        //     setCurrent(current + 1)
        // }
        //เขียน If eles แบบลดรูป
        current === length - 1 ? setCurrent(0) : setCurrent(current + 1) //ถ้า slideRight อยู่ index สุดท้าย คือ จะให้ slide กลับไป Index ที่ 0 แต่ถ้าไม่ใช่ ให้ index  + ทีละ 1 ต่อ
    }


    return (
        <section className="slider">
            <AiOutlineLeft className="slideLeft" onClick={prevSlide} />
            <AiOutlineRight className="slideRight" onClick={nextSlide} />
            {ImageData.map((data, index) => {
                return (
                    <div className={index === current ? "slide active" : "slide"} key={index}>
                        {index === current && ( //เช็คว่า index ตรงกับ current หรือไม่ ถ้าเป็นจริง จะให้แสดง ของ div index นั้นมา
                            <div>
                                <img className="slider_image" src={data.image} alt={data.title} />
                                <p>{data.title}</p>
                            </div>

                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider