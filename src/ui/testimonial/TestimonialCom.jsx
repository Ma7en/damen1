/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function TestimonialCom({ testimonial, className }) {
    const { id, image, name, description, location, starrating } = testimonial;

    return (
        <>
            <div className={className}>
                <div className="image">
                    <img src={image} alt={`slide-${id}`} />
                </div>

                <div className="text ">
                    <p>{description}</p>
                    <h3>{name}</h3>
                    <span>{location}</span>
                </div>
            </div>
        </>
    );
}

export default TestimonialCom;
