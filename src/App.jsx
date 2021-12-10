import { useState } from "react";
import Modal from "./components/modals/modal";
import './style.scss'
import GR from './greenRound.svg'
import YR from './yellowRound.svg'
import heart from './heart.svg'
import alert from './alert.svg'

function App(){

    const [rateModal, setRateModal] = useState(false);
    const [alertModal, setAlertModal] = useState(false);
    const ToggleRateModal = () => {
        setRateModal(!rateModal)
    };    
    const ToggleAlertModal = () => {
        setAlertModal(!alertModal)
    };

    return(
        <>
            <h1 className={'title'}>Modal</h1>
            <div className="container">
                <button onClick={() => ToggleRateModal()}>Rate us</button>
                <button onClick={() => ToggleAlertModal()}>Delete</button>
            </div>

            <Modal show={rateModal} w={514} mh={444}> 
                <div className="mbody_wrap">
                    <div className="round heart_image">
                        <img src={heart} alt="" />
                    </div>
                    <p>Please, rate the our service. This is important to us</p>
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
        </>
    )
}

export default App;