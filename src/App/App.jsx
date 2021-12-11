import { useState } from "react";
import Modal from "./components/Modals/modal";
import StarRating from "./components/StarRating/StarRating";
import './style.scss'
import heart from './heart.svg'
import alert from './alert.svg'
import logout from './logout.svg'
import success from './ok.svg'

// payment logos
import visaLogo from './logos/Visa.svg'
import mastercardLogo from './logos/Mastercard.svg'
import paypalLogo from './logos/paypal.svg'
import yoomoneyLogo from './logos/YuMoney.svg'



function App(){

    const [selectedPaymentType, setSelectedPaymentType] = useState(null)

    const ToggleSelectedPaymentType = (i) => {
        setSelectedPaymentType(i)
    }

    // Modal status
    
    const [payModal, setPayModal] = useState(false);
    const [rateModal, setRateModal] = useState(false);
    const [alertModal, setAlertModal] = useState(false);
    const [logoutModal, setLogoutModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);


    // Togglers

    const ToggleRateModal = () => {
        setRateModal(!rateModal)
    };    
    const ToggleAlertModal = () => {
        setAlertModal(!alertModal)
    };    
    const ToggleLogoutModal = () => {
        setLogoutModal(!logoutModal)
    };    
    const ToggleSuccessModal = () => {
        setSuccessModal(!successModal)
    };    
    const TogglePayModal = () => {
        setPayModal(!payModal)
    };



    return(
        <>
            <h1 className={'title'}>Modal</h1>
            <div className="container">
                <button onClick={() => TogglePayModal()}>Pay</button>
                <button onClick={() => ToggleRateModal()}>Rate us</button>
                <button onClick={() => ToggleSuccessModal()}>Submit</button>
                <button onClick={() => ToggleAlertModal()}>Delete</button>
                <button onClick={() => ToggleLogoutModal()}>Log out</button>
            </div>

            <Modal show={payModal} w={440} mh={586}> 
                <div className="payment_mbody_wrap mbody_wrap">
                    <div className="payment_info">
                        <h3 className="modal_title">Choose the type of payment</h3>
                        <div className="calcs_wrap">
                            <div>
                                <span className="calc_name">General payment type:</span> <span className="calc_amount">$1500</span>
                            </div>

                            <div>
                                <span className="calc_name">30% of the amount:</span> <span className="calc_amount">$450</span>
                            </div>

                            <span className="line"></span>
                            
                            <div className="total_calcs_wrap">
                                <span className="total_calc_name">The final amount:</span> <span className="total_calc_amount">$450</span>
                            </div>
                        </div>

                        <div className="payment_types_wrap">

                            {
                                paymentTypes.map((type, i) => {
                                    return(
                                        <label key={i}>
                                            <div onClick={() => ToggleSelectedPaymentType(i)} className={`payment_type ${selectedPaymentType === i ? 'active' : ""}`}>
                                                <span className="pay_by">Pay by <span className="payment_type_name">{type.name}</span></span>
                                                <div className="logo_wrap">
                                                    <img className="payment_type_logo" src={type.logo} alt="logo" />
                                                </div>
                                            </div>
                                            <input type="radio" name="payment_type"/>
                                        </label>
                                    )
                                })
                            }
                            
                        </div>
                    </div>

                    <div className="payment_btns btns">
                        <button className={"modal-close dark_btn"} onClick={() => { TogglePayModal(); ToggleSuccessModal() }}>
                            Buy now
                        </button>
                    </div>
                </div>
            </Modal>

            <Modal show={rateModal} w={514} mh={444}> 
                <div className="mbody_wrap">
                    <div className="round heart_image">
                        <img src={heart} alt="" />
                    </div>
                    <p>Please, rate the our service. This is important to us</p>

                    <StarRating className={'rate'}/>

                    <div className="btns">
                        <button className={"modal-close white_btn"} onClick={() => ToggleRateModal()}>
                        Back
                        </button>
                        <button className={"submit dark_btn"}>Done</button>
                    </div>
                </div>
            </Modal>

            <Modal show={alertModal} w={430} mh={360}> 
                <div className="mbody_wrap">
                        <div className="round alert_image">
                            <img src={alert} alt="" />
                        </div>
                        <p>Do you really want to cancel your order?</p>
                        <div className="btns">
                            <button className={"modal-close white_btn"} onClick={() => ToggleAlertModal()}>
                            Back
                            </button>
                            <button className={"submit dark_btn"}>Cancel the order</button>
                        </div>
                    </div>
            </Modal>

            <Modal show={logoutModal} w={430} mh={360}> 
                <div className="mbody_wrap">
                        <div className="round danger_image">
                            <img src={logout} alt="" />
                        </div>
                        <p>Do you really want to log out of the system?</p>
                        <div className="btns">
                            <button className={"modal-close white_btn"} onClick={() => ToggleLogoutModal()}>
                            Back
                            </button>
                            <button className={"submit dark_btn"}>Log out</button>
                        </div>
                    </div>
            </Modal>

            <Modal show={successModal} w={430} mh={360}> 
                <div className="mbody_wrap">
                        <div className="round heart_image">
                            <img src={success} alt="" />
                        </div>
                        <p>Your order has been accepted.  We will contact you soon</p>
                        <div className="btns">
                            <button className={"modal-close outlined_btn"} onClick={() => ToggleSuccessModal()}>
                                Back
                            </button>
                        </div>
                    </div>
            </Modal>
        </>
    )
}

const paymentTypes = [
    {
        name: 'Visa',
        logo: visaLogo
    },
    {
        name: 'Mastercard',
        logo: mastercardLogo
    },
    {
        name: 'PayPal',
        logo: paypalLogo
    },
    {
        name: 'YooMoney',
        logo: yoomoneyLogo
    },
]

export default App;