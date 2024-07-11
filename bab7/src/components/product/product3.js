import React, { Component }  from "react";

export default class Product3 extends Component { 
    state = { 
        klik: 0 }

    add = ()=> { 
        this.setState((state) => ( { 
            klik : state.klik + 1 
            
        }))
    }

    remove = ()=> { 
        this.setState(()=> ({ 
            klik: 0 
        }))
    }

    render() { 
        return ( 
            <div className="wrapper" > 
            <div className="click">total click {this.state.klik} </div> 
            <button className="button" onClick={this.add}>add </button>
            <button className="kurng" onClick={this.remove}>remove</button>
            </div>
        

        )
    }
}