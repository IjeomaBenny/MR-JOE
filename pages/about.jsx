import classes from './about.module.css'

function About(){
    return(
    
      <div className= {classes.article} >

        <nav>
            <ul>
              <li><i class="fa-solid fa-bars"></i></li>
              <li><i class="fa-solid fa-magnifying-glass"></i>search</li>
              <li>shop</li>
          </ul>
        </nav>

        <div className={classes.partA} >
        <ul>
              <li><i class="fa-solid fa-bars"></i></li>
              <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>search</li>
              <li>shop</li>
          </ul>
        </div>

        <h1>This is about page</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt optio voluptates eum et sint quo dolorem consectetur rem eaque. Quo, eum id iste blanditiis eos velit, similique reprehenderit minus a natus fugiat at dolore quidem deleniti debitis ducimus quaerat cupiditate. Corporis deleniti tempora esse est vero dignissimos itaque neque illum voluptas pariatur dicta consectetur <br /> libero delectus, aspernatur exercitationem amet in. Aliquid quia harum unde, voluptate veniam architecto nihil at dolor, est dolorum distinctio maiores animi tenetur ipsam molestias temporibus culpa doloribus molestiae, repellendus praesentium illum. Sed laudantium exercitationem, soluta harum commodi illo labore perferendis, impedit mollitia quidem, ducimus consequatur expedita. <br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt optio voluptates eum et sint quo dolorem consectetur rem eaque. Quo, eum id iste blanditiis eos velit, similique reprehenderit minus a natus fugiat at dolore quidem deleniti debitis ducimusLorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt optio voluptates eum et sint quo dolorem consectetur rem eaque. Quo, eum id iste blanditiis eos velit, similique reprehenderit minus a natus fugiat at dolore quidem deleniti debitis ducimus
        </p>
      </div>
      
    )
  }
  export default About
  
