
function Filter(props){
    
    function dropDownYear(event){
        props.yearChange(event.target.value);
    }

    return <div style={{marginLeft: '80vw'}}>
        <a style={{color:'white'}}>sort by year </a>
        <select onChange={dropDownYear} >
            <option>All</option>        
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
        </select>
    </div>
}

export default Filter