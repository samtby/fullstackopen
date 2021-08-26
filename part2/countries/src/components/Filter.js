const Filter = ({filter,handle}) =>{
console.log('filter',filter)
return(
    <div> 
        filter shown with: <input name="filter" value={filter}  onChange={handle}/>
    </div>
)
}
export default Filter 