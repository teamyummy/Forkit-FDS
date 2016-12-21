import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PhotoCarousel from '../components/PhotoCarousel/PhotoCarousel';
import RestaurantInfo from '../components/Restaurant/RestaurantInfo';
import Spinner from '../components/Common/Spinner';
import * as RestaurantActions from '../actions/restaurant';
// import { Link } from 'react-router';
import ReviewList from '../components/Review/ReviewList';
import ReviewItem from '../components/Review/ReviewItem';

//Header, 지도, 페이징 컴포넌트와 검색/정렬 필터, 목록으로 구성됨

class Restaurant extends Component
{
  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  //처음 열렸을 때 1회 실행
  componentDidMount(){
    // const { dispatch } = this.props;
    this.loadRestaurant(this.props.params.id);
  }

  //컴포넌트가 prop을 받을때 실행(params 변경시)
  componentWillReceiveProps(nextProps){
    if(nextProps.params.id !== this.props.params.id){
      this.loadRestaurant(nextProps.params.id);
    }
  }

  loadRestaurant(id){
    const { actions } = this.props;
    actions.fetchRestaurantIfNeeded(id);
  }

  render(){
    return (
      <div>
        {
          this.props.restaurant.id &&
          <main>
            <PhotoCarousel images={this.props.restaurant.images} />
            <div className="container">
              <RestaurantInfo restaurant={this.props.restaurant}>
                {this.props.restaurant.reviews && 
                  <ReviewList reviews={this.props.restaurant.reviews}>
                    {
                      this.props.restaurant.reviews.map(review => 
                        <ReviewItem key={review.id} review={review} />
                      )
                    }
                  </ReviewList>
                }
              </RestaurantInfo>
            </div>
          </main>
        }
        <Spinner isFetching={this.props.isFetching} />
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => ({
//   isFetching: state.restaurant.isFetching,
//   restaurant: state.restaurant.info
// });
const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: state.restaurant.isFetching,
    restaurant: state.restaurant.info
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchRestaurantIfNeeded: RestaurantActions.fetchRestaurantIfNeeded
  }, dispatch)
});

// export default Restaurant;
export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);