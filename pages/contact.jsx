function Contact(){
    return(
        <div>
            <h4>FILL THE FORM BELOW</h4> <br />
            {/* <img src="kuda.png" alt="image" /> */}

            <form action="">
            <label htmlFor="">First Name</label>
            <input type="text" name="" id="" /> <br /> <br />
            <label htmlFor="">Middle Name</label>
            <input type="text" name="" id="" /> <br /><br />
            <label htmlFor="">Surname</label>
            <input type="text" name="" id="" /> <br /><br />
            <label htmlFor="">Country</label>
            <input type="text" name="" id="" /> <br /><br />
            <label htmlFor="">State</label>
            <input type="text" name="" id="" /><br /><br />
            <label htmlFor="">Email</label>
            <input type="text" name="" id="" /><br /><br />
            <label htmlFor="">Password</label>
            <input type="text" name="" id="" /><br /><br />
            <hr />
            <h4>SEX OPTION </h4> <br />
            <input type="radio" name="gender" id="" />Male <br />
            <input type="radio" name="gender" id="" />Female <br /> <br />

            <h4>FAVOURITE ACTIVITES</h4>
            <input type="checkbox" name="" id="" />Swimming
            <input type="checkbox" name="" id="" />Reading
            <input type="checkbox" name="" id="" />Coding
            <input type="checkbox" name="" id="" />Dancing <br /><br /><hr />

            <h4>MEANS OF IDENTIFICATION</h4>
            <input type="radio" name="document" id="" /> Voters card
            <input type="radio" name="document" id="" /> International Passport
            <input type="radio" name="document" id="" /> Drivers Licence <br /><br /><hr />


        <h4>Fill in your comments, Feedback and Complains in the given space below</h4>
         <textarea name="" id="" cols="30" rows="10"></textarea>

         <input type="submit" value="Click here to submit" />
        </form>

        <img src="kuda.png" alt="logo" />
        </div>
    )

}
export default Contact