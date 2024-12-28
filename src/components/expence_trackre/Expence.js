import React, { useState } from 'react'

const Expence = () => {

    const [data,setData] = useState([]);
    const [total,setTotal] = useState(0);
    const [info,setInfo] = useState({
        date:'',
        hours:'',
        item:'',
    })
    const options = [
        "Food",
         "Snacks",
         "Gun",
         "Awm",
    ];

    function changeHandeler(e) {
        setInfo(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    function Submithandeler(){
       setData(prev=>[...prev,info]);
       setTotal(total + parseInt(info.hours));
       
       
    }

    function deletitem(index){
        const updatedData = [...data];
        updatedData.splice(index, 1);
        setData(updatedData);
        setTotal(total-updatedData)
    }

    console.log(data,"info");

  return (
    <div>
      <div className="form_sec">
        <input name='date' onChange={changeHandeler} type="date" />
        <input name='hours' onChange={changeHandeler} type="number"/>
        <select name='item' onChange={changeHandeler}>
            <option> please add items</option>
            {options.map((options,index)=>{
                return(
                    <option key={index}>
                        {options}
                    </option>
                )
            })}
        </select>
        <button onClick={Submithandeler}>Add expence</button>
      </div>
      <div className="exp">
        <h1>Expences</h1>
        {data.map((detail,index)=>{
            return(
                <div key={index} className="detailss">
                    <div>
                        <span>{detail.date}</span>
                        <span>-${detail.hours}</span>
                        <span>-{detail.item}</span>
                    </div>
                    <div className="btn">
                        <button onClick={()=>{
                            deletitem(index);
                        }}>Delet</button>
                    </div>
                    
                </div>

            )
        })}
      </div>
      <div className="total_sec">
        <p>Total:{total}</p>
      </div>
    </div>
  )
}

export default Expence
