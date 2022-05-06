import { useEffect } from "react";

function Introduce({ img, title, text, social, face, tab }: any) {
  let info = [
    { name: "Phone :", value: "053 125 7557" },
    { name: "Email :", value: "Eliot@gmail.com" },
    { name: "Freelancer", value: "Available" }
  ];
  useEffect(() => {
    document.title = tab;
  });

  return (
    <div className='introduce d-flex h-100 align-items-center'>
      <div className='image'>
        <img src={`../images/${img}`} className="d-none d-lg-block" alt="" />
      </div>
      <article>
        <div className={`title d-flex align-items-center ${social ? "introduce" : ""}`} style={{ gap: "7px" }}>
          <h3 className='m-0 fw-bold'>{title}</h3>
          <img src={`../images/${face}`} style={{ width: "26px", height: "26px" }} alt="" />
        </div>

        {text.startsWith("Hello") ?
          <p className='lead m-0 '>{text}</p> : <pre className="lead">{text}</pre>}

        <ul>
          {social && info.map(({ name, value }, index) => <li key={index}>{name} <span>{value}</span></li>)}
        </ul>
        {!social &&
          <div className="d-flex justify-md-content-left justify-sm-content-center" style={{ gap: "15px" }}>
            <button className="btn btn-success">
              <a href="../CV.pdf" download="pdf" className="text-white fw-bold">English Resume</a></button>
            <button className="btn btn-danger">
              <a className="text-white" href="../CV-AR.pdf" download="pdf" >Arabic Resume</a></button>
          </div>
        }
      </article>

    </div>
  )
}

export default Introduce
