type SelectedEachProp={
    cat: string
    remove?: ()=> void
}

const SelectedEach = ({cat,remove}: SelectedEachProp) => {
  return (
    <div className="selected-each-container">
      <div className="cross" onClick={remove}>✕</div>
      <div className="cat-name">{cat}</div>
    </div>
  )
}

export default SelectedEach
