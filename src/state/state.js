import React, { Component } from "react";

class StateUsage extends Component {
  state = {
    count: 1,
    subscription: false,
    products: [
      {
        id: 1,
        name: "laptop",
        count: 1,
      },
      {
        id: 2,
        name: "tablet",
        count: 1,
      },
    ],
  };

  hello = (action) => {
    switch (action) {
      case "increase":
        this.setState(
          {
            count: this.state.count + 1,
          },
          () => {
            console.log(this.state.count);
          }
        );
        break;

      case "decrease":
        if (this.state.count > 0) {
          this.setState(
            {
              count: this.state.count - 1,
            },
            () => {
              console.log(this.state.count);
            }
          );
          break;
        }
      case "reset":
        this.setState(
          {
            count: 1,
          },
          () => {
            console.log(this.state.count);
          }
        );
        break;
      default:
    }
  };

  subscriptionFun = () => {
    this.setState({
      subscription: !this.state.subscription,
    });
  };

  render() {
    return (
      <>
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={10000}>
              <img
                src="https://cdn.visordown.com/styles/v2_large/s3/field/image/2020_Yamaha_R1M.jpg?itok=Q0zg3aQO"
                style={{ height: 600 }}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h2 style={{color:"blue"}}>YAMAHA R1</h2>
                <p>
                  BLUE HORSE
                </p>
                <button onClick={this.subscriptionFun}>
          {this.state.subscription ? "added" : "add"}
        </button>
        {this.state.subscription && (
          <>
            <h3>{this.state.count}</h3>
            <h4>{this.state.message}</h4>
            <button onClick={() => this.hello("increase")}>increment</button>
            <button onClick={() => this.hello("decrease")}>decrese</button>
            <button onClick={() => this.hello("reset")}>Reset</button>
          </>
        )}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img
                src="https://assets.newatlas.com/dims4/default/33aa80b/2147483647/strip/true/crop/1777x1000+0+40/resize/1200x675!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2F2018-ducati-panigale-v4-s-speciale-81.jpg"
                style={{ height: 600 }}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h2 style={{color:"red"}}>DUKATI PANIGALE</h2>
                <p>
                  RED CHETAH
                </p>
                <button onClick={this.subscriptionFun}>
          {this.state.subscription ? "added" : "add"}
        </button>
        {this.state.subscription && (
          <>
            <h3>{this.state.count}</h3>
            <h4>{this.state.message}</h4>
            <button onClick={() => this.hello("increase")}>increment</button>
            <button onClick={() => this.hello("decrease")}>decrese</button>
            <button onClick={() => this.hello("reset")}>Reset</button>
          </>
        )}
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://d142kdlbmhxfq6.cloudfront.net/blogimgs/2015/10/ninja1-1024x683.jpg" style={{ height: 600 }} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h2 style={{color:"red"}}>NINJA ZX10R</h2>
                <p>
                  GREEN DRAGON
                </p>
                <button onClick={this.subscriptionFun}>
          {this.state.subscription ? "added" : "add"}
        </button>
        {this.state.subscription && (
          <>
            <h3>{this.state.count}</h3>
            <h4>{this.state.message}</h4>
            <button onClick={() => this.hello("increase")}>increment</button>
            <button onClick={() => this.hello("decrease")}>decrese</button>
            <button onClick={() => this.hello("reset")}>Reset</button>
          </>
        )}
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"/>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        
      </>
    );
  }
}

export default StateUsage;
