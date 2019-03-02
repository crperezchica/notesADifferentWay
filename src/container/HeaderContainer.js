import { connect } from 'react-redux';

//first need to figure out what - use selectors - mapping state to props
//map redux state to component props
const mapStateToProps = state => ({
  title: 'Hello', //what ever gets passed as value is what props will pass
  subtitle: 'Body'
  // title: state.title - you would need to do this to grap things from the store- but this is bad practice
})

//when ever we want to invoke an action or make changes to store
// const mapDispatchToProps = dispatc => ({

// });

export defautl connect(
  mapStateToProps
  // mapDispatchToProps
)