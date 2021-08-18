  const Filter = ({filter,handle}) => {
    return (
      <div>
          name: <input name="filter" value={filter}  onChange={handle}/>
      </div>
    )
}
export default Filter 