function Introduce() {
  let info = [
    {name:"Phone :",value:"053 125 7557"},
    {name:"Email :",value:"Eliot@gmail.com"},
    {name:"Freelancer",value:"Available"}
  ];
  
  return (
    <div className='introduce d-flex h-100 align-items-center'>
      <div className='image'>
      <img src={"../images/introduce.png"} className="d-none d-lg-block" alt="" />
      </div>
      <article>
        <div className='title d-flex align-items-center mb-4' style={{gap:"4px"}}>
          <h3 className='m-0 fw-bold'>Who Am I</h3>
          <img src={"../images/laughing.png"} style={{width:"26px",height:"26px"}} alt=""/>
        </div>
        <p className='lead m-0 '>Hello I Am Eliot Evergarden working as full stack developer based on Saudi Arabia in jeddah, i have amazing experiance at devolpment & website creation</p>
        <ul>
          {info.map(({name,value},index) => <li key={index}>{name} <span>{value}</span></li>)}
        </ul>
      </article>
       
    </div> 
  )
}

export default Introduce
