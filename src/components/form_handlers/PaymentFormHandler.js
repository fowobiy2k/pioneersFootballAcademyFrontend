import { useRef } from 'react'
import { useHistory } from 'react-router-dom'

const PaymentFormHandler = () => {

    const history = useHistory()

    const purposeField = useRef()
    const amountField = useRef()
    const payerNameField = useRef()
    const payerIdField = useRef()
    const dateField = useRef()

    const paymentHandler = (e) => {

        e.preventDefault()

        const purpose = purposeField.current.value;
        const amount = amountField.current.value;
        const payer = payerNameField.current.value 
        const payerId = payerIdField.current.value
        const date = dateField.current.value

        const payment = {
            purpose,
            amount,
            payer,
            payerId,
            date
        }


        fetch('/recordpayment', {
            method: 'POST',
            body: JSON.stringify(payment),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(data => {
            console.log(data)
            history.replace('/')
        })

        
    }

    return (
        <div className="form-box payment display">
                        <h4>record a payment</h4>

                        <form onSubmit={paymentHandler} className="payment-form" id='payment'>
                            
                        <div className="input-block">
                                <div className="label">
                                <label htmlFor="purpose">purpose:</label> &nbsp; &nbsp;
                                </div>
                                
                                <div className="input">
                                <select name="purpose" id="purpose" ref={purposeField} >
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
                                <input type="text" name='amount' ref={amountField} /> <br />
                                </div>
                            </div>

                            <div className="input-block">
                                <div className="label">
                                <label htmlFor="paidBy">Paid By:</label> &nbsp; &nbsp;
                                </div>
                                
                                <div className="input">
                                <input type="text" name='paidBy' ref={payerNameField} /> <br />
                                </div>
                            </div>

                            <div className="input-block">
                                <div className="label">
                                <label htmlFor="payerId">Payer ID:</label> &nbsp; &nbsp;
                                </div>
                                
                                <div className="input">
                                <input type="text" name='payerId' ref={payerIdField} /> <br />
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

export default PaymentFormHandler
