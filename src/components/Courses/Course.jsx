import React from 'react';
import avatar from '../../assets/images/avatar.jpg';
import FontAwesome from 'react-fontawesome';

function Course(props) {
    return (
        <div className="course">
            <div className="course-cover">
                <img src="https://www.goya.com/media/3540/arepa-with-chicken-and-avocado-arepa-reina-pepiada.jpg?quality=80" alt="Arepas Venezolanas"/>
            </div>
            <div className="course-body">
                <div className="course-title">Arepas Venezolanas desde cero</div>
                <div className="course-description">Aprende cómo hacer arepas venezolanas fácil y desde cero.</div>
            </div>
            <div className="course-footer main-justify cross-center">
                <div className="course-author">
                    <div className="avatar"><img src={ avatar } alt="Avatar de usuario" /></div>
                </div>
                <div className="course-price text-uppercase"><FontAwesome name="shopping-cart" />Free</div>
            </div>
        </div>
    )
}

export default Course
