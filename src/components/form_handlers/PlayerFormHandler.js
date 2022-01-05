import { useRef } from 'react'
import { useHistory } from 'react-router-dom'

const PlayerFormHandler = () => {

    const history = useHistory()

    const fnameField = useRef()
    const lnameField = useRef()
    const addressField = useRef()
    const playerPhoneField = useRef()
    const ageField = useRef()
    const classField = useRef()
    const parentNameField = useRef()
    const parentPhoneField = useRef()

    const playerHandler = (e) => {

        e.preventDefault()

        const firstName = fnameField.current.value
        const lastName = lnameField.current.value 
        const address = addressField.current.value
        const phone = playerPhoneField.current.value
        const academicLevel = classField.current.value
        const age = ageField.current.value
        const pName = parentNameField.current.value
        const pPhone = parentPhoneField.current.value

        const player = {
            firstName,
            lastName,
            address,
            phone,
            academicLevel,
            age,
            pName,
            pPhone
        }


        fetch('/createplayer', {
            method: 'POST',
            body: JSON.stringify(player),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(data => {
            console.log(data)
            history.replace('/')
        })

        
    }


    return (

        <div className="form-box reg-player diplay">

            <h4>register new player</h4>
            <form onSubmit={playerHandler} className='reg-player-form' id='register player'>

                <div className="input-block">
                    <div className="label">
                        <label htmlFor="fname">firstname:  </label>
                    </div>

                    <div className="input">
                        <input type="text" name='fname' ref={fnameField} /> <br />
                    </div>
                </div>

                <div className="input-block">
                    <div className="label">
                        <label htmlFor="lname">surname:  </label>
                    </div>

                    <div className="input">
                        <input type="text" name='lname' ref={lnameField} /> <br />
                    </div>
                </div>

                <div className="input-block">
                    <div className="label">
                        <label htmlFor="address">address:  </label>
                    </div>

                    <div className="input">
                        <input type="text" name='address' ref={addressField} /> <br />
                    </div>
                </div>

                <div className="input-block">
                    <div className="label">
                        <label htmlFor="playerPhone">phone:  </label>
                    </div>

                    <div className="input">
                        <input type="text" name='playerPhone' ref={playerPhoneField} /> <br />
                    </div>
                </div>

                <div className="input-block">
                    <div className="label">
                        <label htmlFor="age">age:  </label> &nbsp;
                    </div>

                    <div className="input">
                        <input type="text" name='age' ref={ageField} /> <br />
                    </div>
                </div>

                <div className="input-block">
                    <div className="label">
                        <label htmlFor="class">class:  </label> &nbsp;
                    </div>

                    <div className="input">
                        <input type="text" name='class' ref={classField} /> <br />
                    </div>
                </div>

                <hr />

                <span>parent / guardian</span> <br />

                <div className="input-block">
                    <div className="label">
                        <label htmlFor="name">name:</label> &nbsp;
                    </div>

                    <div className="input">
                        <input type="text" name='name' ref={parentNameField} /> <br />
                    </div>
                </div>

                <div className="input-block">
                    <div className="label">
                        <label htmlFor="phone">phone:</label> &nbsp; &nbsp;
                    </div>

                    <div className="input">
                        <input type="text" name='phone' ref={parentPhoneField} /> <br />
                    </div>
                </div>

                <button>Save</button>

            </form>
        </div>


    )
}

export default PlayerFormHandler
