import { useState } from "react";
import Modal from "./components/modals/modal";
import './style.scss'

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
                <button onClick={() => ToggleRateModal()}>Delete account</button>
            </div>

            <Modal show={rateModal} w={430} mh={360}> 
                <p>Rate us</p>
                <button className="modal-close" onClick={() => ToggleRateModal()}>
                  Cancel
                </button>
    
                <button className="submit">Submit</button>
            </Modal>

            <Modal show={alertModal} w={430} mh={360}> 
                <p>Are you sure?</p>
                <button className="modal-close" onClick={() => ToggleAlertModal()}>
                  Cancel
                </button>
    
                <button className="submit">Submit</button>
            </Modal>
        </>
    )
}

export default App;