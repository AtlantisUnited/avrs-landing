import { connect } from 'react-redux'
import { load } from '../../../actions/news'
import News from '../components/News'

export default connect(
  state => state.news,
  dispatch => ({
    onLoad: () => dispatch(load()),
  }),
)(News)
