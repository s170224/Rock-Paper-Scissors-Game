import {PlayerButton, ListItem} from '../RockPaperScissor/styledComponents'
import './index.css'

const EachListComponent = props => {
  const {eachItemDetails, onClickUpdateResults} = props
  const {id, imageUrl, className1} = eachItemDetails

  const onclickFunc = () => {
    onClickUpdateResults(id)
  }

  return (
    <ListItem>
      <PlayerButton
        onClick={onclickFunc}
        data-testid={className1}
        type="button"
      >
        <img src={imageUrl} alt={id} className="image1" />
      </PlayerButton>
    </ListItem>
  )
}

export default EachListComponent
