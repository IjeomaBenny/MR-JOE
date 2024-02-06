import classes from './main.module.css'

function Main(){
    return(
        <div className={classes.main } >
            <div className={classes.mainA} >
            <h1>Little Effort, <br />Great Result</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br /> Unde explicabo blanditiis neque facilis modi, rem dicta <br /> praesentium itaque veniam, doloremque nulla.Accusantium <br /> obcaecati libero vero mollitia facilis modi, pariatur est. <br /> Nam explicabo ipsam ut consectetur placeat officia <br />iure perspiciatis molestiae tempora saepe! Iusto optio <br /> natus incidunt,inventore quae tempora molestiae!
            </p>
            <button>Learn More</button>
            </div>
        
            <img src="five.png" alt="" />
        </div>
    )
}
export default Main