import {useRef} from 'react'
import { useHistory } from 'react-router-dom'

const ExpenseFormHandler = () => {

    const history = useHistory()

    const purposeField = useRef()
    const amountField = useRef()
    const dateField = useRef()

    const expenseHandler = (e) => {

        e.preventDefault()

        const purpose = purposeField.current.value;
        const amount = amountField.current.value;
        const date = dateField.current.value;
        

        const expense = {
            purpose,
            amount,
            date
        }

        fetch('/recordexpense', {
            method: 'POST',
            body: JSON.stringify(expense),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(data => {
            console.log(data)
            history.replace('/')
        })

        
    }

    return (
        <div className="form-box expenses display">

                        <h4>record expenses</h4>

                        <form onSubmit={expenseHandler} className="expenses-form" id='expenses'>
                            
                        <div className="input-block">
                                <div className="label">
                                <label htmlFor="purpose">purpose:</label> &nbsp; &nbsp;
                                </div>
                                
                                <div className="input">
                                <input type="text" name='purpose' ref={purposeField} /> <br />
                                </div>
                            </div>

                            <div className="input-block">
                                <div className="label">
                                <label htmlFor="amount">amount:</label> &nbsp; &nbsp;
                                </div>
                                
                                <div className="input">
                                <input type="text" name='amount' ref={amountField} /> <br />
                                </div>
                            </div>

                            <div className="input-block">
                                <div className="label">
                                <label htmlFor="date">Date:</label> &nbsp; &nbsp;
                                </div>
                                
                                <div className="input">
                                <input type="date" name='date' ref={dateField} /> <br />
                                </div>
                            </div>

                            <button>Save</button>
                        </form>
                    </div>

    )
}

export default ExpenseFormHandler
