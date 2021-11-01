import { useState } from 'react';
import {Link} from 'react-router-dom'
import { TaskLinks } from '../data/TaskLinks'
import axios from 'axios'
import '../css/admin.scss'

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
            method: 'PUT',
            Headers: { 'Content-Type': 'application/json '},
            body : myForm
        };

        // fetch('http://localhost:8099/pfa/createplayer', requestOptions)
        //     .then(response => response.json())
        //     .then(data => console.log(data))

        axios.put('http://localhost:8099/pfa/createplayer', myForm)
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
                    
                    <div className={task === 'match' ? "form-box match display" : "form-box match hide"}>
                        <h4>create friendly match</h4>
                        <form action="#" className='match-form' id='match'>

                            <div className="input-block">
                                <div className="label">
                                <label htmlFor="opponent">opponent:</label>
                                </div>
                                
                                <div className="input">
                                <input type="text" name='opponent' /> <br />
                                </div>
                            </div>

                            <div className="input-block">
                                <div className="label">
                                <label htmlFor="venue">Venue:</label>
                                </div>
                                
                                <div className="input">
                                <input type="text" name='venue' /> <br />
                                </div>
                            </div>

                            <div className="input-block">
                                <div className="label">
                                <label htmlFor="date">date:</label>
                                </div>
                                
                                <div className="input">
                                <input type="date" name='date' /> <br />
                                </div>
                            </div>

                            <div className="input-block">
                                <div className="label">
                                <label htmlFor="time">time:</label>
                                </div>
                                
                                <div className="input">
                                <input type="time" name='time' /> <br />
                                </div>
                            </div>

                            <div className="button">
                            <a className='submit' href="#" >save</a>
                            </div>
                        </form>
                    </div>

                    <div className={task === 'register player' ? "form-box reg-player diplay" : "hide" }>

                        <h4>register new player</h4>
                        <form action="#" className='reg-player-form' id='register player'>
                            
                        <div className="input-block">
                                <div className="label">
                                <label htmlFor="fname">firstname:  </label>
                                </div>
                                
                                <div className="input">
                                <input type="text" name='fname' /> <br />
                                </div>
                            </div>

                            <div className="input-block">
                                <div className="label">
                                <label htmlFor="lname">surname:  </label>
                                </div>
                                
                                <div className="input">
                                <input type="text" name='lname' /> <br />
                                </div>
                            </div>

                            <div className="input-block">
                                <div className="label">
                                <label htmlFor="address">address:  </label>
                                </div>
                                
                                <div className="input">
                                <input type="text" name='address' /> <br />
                                </div>
                            </div>

                            <div className="input-block">
                                <div className="label">
                                <label htmlFor="name">phone:  </label>
                                </div>
                                
                                <div className="input">
                                <input type="text" name='name' /> <br />
                                </div>
                            </div>

                            <div className="input-block">
                                <div className="label">
                                <label htmlFor="age">age:  </label> &nbsp;
                                </div>
                                
                                <div className="input">
                                <input type="text" name='age' /> <br />
                                </div>
                            </div>

                            <div className="input-block">
                                <div className="label">
                                <label htmlFor="class">class:  </label> &nbsp;
                                </div>
                                
                                <div className="input">
                                <input type="text" name='class' /> <br />
                                </div>
                            </div>

                            <hr />

                            <span>parent / guardian</span> <br />

                            <div className="input-block">
                                <div className="label">
                                <label htmlFor="name">name:</label> &nbsp;
                                </div>
                                
                                <div className="input">
                                <input type="text" name='name' /> <br />
                                </div>
                            </div>

                            <div className="input-block">
                                <div className="label">
                                <label htmlFor="phone">phone:</label> &nbsp; &nbsp;
                                </div>
                                
                                <div className="input">
                                <input type="text" name='phone' /> <br />
                                </div>
                            </div>

                            <div className="button">
                            <a className='submit' href="#" onClick={registerPlayer}> save</a>
                            </div>
                            
                        </form>
                    </div>


                    <div className={task === 'payment' ? "form-box payment display" : 'hide' }>
                        <h4>record a payment</h4>

                        <form action="#" className="payment-form" id='payment'>
                            
                        <div className="input-block">
                                <div className="label">
                                <label htmlFor="purpose">purpose:</label> &nbsp; &nbsp;
                                </div>
                                
                                <div className="input">
                                <select name="purpose" id="purpose">
                                <option value="registration">registration</option>
                                <option value="monthly fee">monthly fee</option>
                            </select> <br />
                                </div>
                            </div>
                            
                            <div className="input-block">
                                <div className="label">
                                <label htmlFor="amount">amount:</label> &nbsp; &nbsp;
                                </div>
                                
                                <div className="input">
                                <input type="text" name='amount' /> <br />
                                </div>
                            </div>

                            <div className="button">
                            <a className='submit' href="#">save</a>
                            </div>
                        </form>
                    </div>

                    <div className={task === 'expenses' ? "form-box expenses display" : 'hide'}>

                        <h4>record expenses</h4>

                        <form action="#" className="expenses-form" id='expenses'>
                            
                        <div className="input-block">
                                <div className="label">
                                <label htmlFor="purpose">purpose:</label> &nbsp; &nbsp;
                                </div>
                                
                                <div className="input">
                                <input type="text" name='purpose' /> <br />
                                </div>
                            </div>

                            <div className="input-block">
                                <div className="label">
                                <label htmlFor="amount">amount:</label> &nbsp; &nbsp;
                                </div>
                                
                                <div className="input">
                                <input type="text" name='amount' /> <br />
                                </div>
                            </div>

                            <div className="button">
                            <a className='submit' href="#">save</a>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="display" id='display'></div>

            </div>
        </div>
    )
}

export default Admin
