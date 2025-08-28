type SelectedEachProp={
    cat: string
}

const SelectedEach = ({cat}: SelectedEachProp) => {
  return (
    <div className="selected-each-container">
      <div className="cross">✕</div>
      <div className="cat-name">{cat}</div>
    </div>
  )
}

export default SelectedEach
