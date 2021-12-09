import { useState } from "react";
import Modal from "./components/modals/modal";

function App(){

    const [rateModal, setRateModal] = useState(false);
    const ToggleRateModal = () => setRateModal(!rateModal);

    return(
        <>
            <button onClick={() => ToggleRateModal()}>Open Modal</button>

            <Modal show={rateModal} w={430} mh={360}> 
                <p>erkufhbeakhdbn</p>
                <button className="modal-close" onClick={() => ToggleRateModal()}>
                  Cancel
                </button>
    
                <button className="submit">Submit</button>
            </Modal>
        </>
    )
}

export default App;