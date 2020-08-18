import React from 'react';
import axios from 'axios';
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data:
        { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading
          ? (<div className="loader">
            <span className="loader__text">Loading...</span>
          </div>)
          : (
            <div className="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </div>
          )}
      </section>
    );
  }
}

export default App;



// import React from 'react';
// import PropTypes from 'prop-types';

// class App extends React.Component{
//   constructor(){
//     super();
//     console.log("hello");
//   }
//   state ={
//     count :0
//   };
//   add = () =>{
//     this.setState(current=>({count:this.state.count + 1}));
//   };
//   Minus = () => {
//     this.setState(current=>({count: this.state.count - 1}));
//   };
//   componentDidMount(){
//     console.log("component rendered");
//   }
//   componentDidUpdate(){
//     console.log("I just updated");
//   }
//   render(){
//     console.log("I'm rendering");
//     return (
//       <div>
//       <h1>The number is : {this.state.count}</h1>
//       <button onClick={this.add}>Add</button>
//       <button onClick={this.Minus}>Minus</button>
//       </div>
//     )
//   }
// }

// export default App;



// import React from 'react';
// import PropTypes from 'prop-types';

// const foodILike = [
//   {
//     id:1,
//     name: "kimchi",
//     image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20190108_84%2Fcjmall0_1546942547543OHHuV_JPEG%2F38718011L.jpg&type=sc960_832",
//     rating: 5
//   },
//   {
//     id:2,
//     name: "ramen",
//     image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2Fdata17%2F2006%2F8%2F12%2F280%2F31-evol526.jpg&type=sc960_832",
//     rating: 4.9
//   },
//   {
//     id:3,
//     name: "salt",
//     image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130302_84%2Floveme1027_13622084787406ckGX_JPEG%2Fimg03.jpeg&type=sc960_832",
//     rating: 4.8
//   },
//   {
//     id:4,
//     name: "water",
//     image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAxODA2MTJfMjEw%2FMDAxNTI4NzY2MjgxMjMx.HX8am8UJlcPqIbuFwmWwYTbgxTGihAtcmrngWuzyC1Eg.4NlGOENuMAKiJLjo6iPsouq5iopHabQRM309uIOaEfEg.JPEG%2FIB0nugNq5Sxur4rjLwkUzUj7cirU.jpg&type=sc960_832",
//     rating: 4.5
//   },
//   {
//     id:5,
//     name: "curry",
//     image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20100803_289%2Fgodqhr_35_1280800734135Swk68_jpg%2F2010-08-03_10%253B56%253B38_godqhr_35.jpg&type=sc960_832",
//     rating: 4.3
//   }
// ];



// //이는 props.fav를 가져오는 것과 같다.
// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h2>I like {name}</h2>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }

// Food.propTypes ={
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };

// // function Potato(props){
// //   console.log(props);
// //   return <h1>I like Potato</h1>;
// // }
// // component에 정보를 보낼 수 있다
// // 재사용 가능한 컴포넌트를 만들 수 있다는 점이다.

// ///////////////////////////////////////////////////////////

// // function renderFood(dish){
// //   return <Food id={dish.id} name={dish.name} picture={dish.image} />
// // }

// // //foodlike map에 대한 내용을 함수를 통해서 가져오는 방법
// // function App() {
// //   return (
// //     <div>
// //       {foodILike.map(renderFood)}
// //     </div>
// //     )
// // }



// //foodlike map에 대한 내용을 직접 가져오는 방법
// function App() {
//   return (
//     <div>
//       <h1>Hello</h1>
//       {foodILike.map(dish => (
//         <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
//       ))}
//     </div>
//     )
// }

// export default App;
