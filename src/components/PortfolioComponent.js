import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderPortfolioItem({ restaurant }) {
    return (
        <Card>
            <Link to={`/portfolio/${restaurant.id}`}>
                <CardImg width="100%" src={restaurant.image} alt={restaurant.name} />
                <CardImgOverlay>
                    <CardTitle>{restaurant.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}
function Portfolio(props) {
    const portfolio = props.restaurants.map(campsite => {
        return (
            <div key={restaurant.id} className="col-md-5 m-1">
                <RenderPortfolioItem restaurant={restaurant} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/portfolio">Portfolio</Link></BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Portfolio</h2>
                    <hr />
                </div>
                <div className="row">
                    {portfolio}
                </div>
            </div>
        </div>
    );
}
export default Portfolio;
// class Directory extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             restaurants: RESTAURANTS,
//             selectedRestaurant: null
//         };
//     }
//     onSelectRes(restaurant) {
//         this.setState({ selectedRestaurant: restaurant });
//     }
//     renderSelectRes(restaurant) {
//         if (restaurant) {
//             return (
//                 <Card>
//                     <CardImg top src={restaurant.alt} alt={restaurant.name} />
//                     <CardBody>
//                         <CardTitle>{restaurant.name}</CardTitle>
//                         <CardText>{restaurant.description}</CardText>
//                     </CardBody>
//                 </Card>
//             );
//         }
//         return <div />;
//     }
    
//     render() {
//         const directory = this.props.restaurants.map(restaurant => {
//             return (
//                 <div key={restaurant.id} className="col-md-6 m-1">
//                     <Card onClick={() => this.onSelectRes(restaurant)}>
//                         <CardImg width="100%" src={restaurant.image} alt={restaurant.name} />
//                         <CardImgOverlay>
//                             <CardTitle>{restaurant.name}</CardTitle>
//                         </CardImgOverlay>
//                     </Card>
//                 </div>
//             );
//         });
//         return (
//             <div className="container">
//                 <div className="row">
//                     {directory}
//                 </div>
//                 <div className="row">
//                     <div className="col-md-5 m-1">
//                         {this.renderSelectRes(this.state.selectedRestaurant)}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Directory;