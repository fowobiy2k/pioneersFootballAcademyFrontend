import { useState } from 'react';
import {Link} from 'react-router-dom'
import { TaskLinks } from '../data/TaskLinks'
import MatchFormHandler from './form_handlers/MatchFormHandler';
import PlayerFormHandler from './form_handlers/PlayerFormHandler';
import axios from 'axios'
import '../css/admin.scss'
import PaymentFormHandler from './form_handlers/PaymentFormHandler';
import ExpenseFormHandler from './form_handlers/ExpenseFormHandler';

const Admin = () => {

    const [task, setTask] = useState();

    

    const displayForm = (e) => {
        e.preventDefault()

        setTask(e.target.innerHTML)

    //    document.getElementById(e.target.innerHTML).classList.remove('hide');
    //    document.getElementById(e.target.innerHTML).classList.add('display');
    }

    const registerPlayer = async (e) => {
        e.preventDefault()
        
        let myForm = document.getElementById(task)

        const requestOptions = {
            method: 'POST',
            Headers: { 'Content-Type': 'application/json '},
            body : myForm
        };

        // fetch('http://localhost:8099/pfa/createplayer', requestOptions)
        //     .then(response => response.json())
        //     .then(data => console.log(data))

        axios.post('http://localhost:8099/pfa/createplayer', myForm)
            .then(response => console.log(response))
            .catch(err => console.log(err))

        // axios({
        //     method: "put",
        //     url: "myurl",
        //     data: myForm
            
        //   })
        //     .then(function (response) {
        //       //handle success
        //       console.log(response);
        //     })
        //     .catch(function (response) {
        //       //handle error
        //       console.log(response);
        //     });

        myForm.reset()

        // let result = await response.json();
        // console.log('hello2')
        // alert(result.message);

        // document.getElementById('display').innerHTML('Player ' + result.firstName + (' created'))


        setTask('')

    //    document.getElementById(e.target.innerHTML).classList.remove('display');
    //    document.getElementById(e.target.innerHTML).classList.add('hide');
    }

    return (
        <div className='admin'>
            <h3 className='welcome'>Welcome, admin</h3>            

            <div className="tasks">

                <div className="scheduler">
                    {TaskLinks.map(task => {
                        return <div className={task.class}>
                            <Link to={task.path} onClick={displayForm}>{task.text}</Link>
                        </div>
                    })}
                </div>

                <div className="forms">
                    
                    { task === 'match' && <MatchFormHandler /> }
                    { task === 'register player' && <PlayerFormHandler /> }
                    { task === 'payment' && <PaymentFormHandler /> }
                    { task === 'expenses' && <ExpenseFormHandler /> }

                    

                    
                    
                </div>
                <div className="display" id='display'></div>

            </div>
        </div>
    )
}

export default Admin
