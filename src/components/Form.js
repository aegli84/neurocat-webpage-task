

const Form = () => {
    return(
        <>
            <div>
                <h2>Contact Us</h2>
                <form action="">
                    <input 
                        id="name" 
                        type="text" 
                        placeholder="name"/>
                    <input 
                        id="email" 
                        type="text" 
                        placeholder="email"/>
                    <input 
                        id="phone" 
                        type="text" 
                        placeholder="phone"/>
                <textarea 
                    className = "textarea"
                    type = "text" 
                    name = "message" 
                    cols = "25" 
                    rows = "7">
                </textarea> 
                </form>
            </div>
            <div>
                <section>
                    <button 
                        className = "button"
                        id = "submit" 
                        type = "submit" 
                        value = "submit">
                        Send
                    </button>
                </section>
            </div>
        </>
    )
}
export default Form;