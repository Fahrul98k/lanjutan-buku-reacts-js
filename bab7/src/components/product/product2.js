import React, { Component }  from "react";




    const Data2 = [ 
        { 
            name: "udin", 
            umur: 25,
            favoritFood: "bakso"
        },
    
        { 
            name: "halo", 
            umur: 24,
            favoritFood: "babi"
        }
    ]

    const add = () => { 

    }


export default class Product2 extends Component {
    state  = { 
        card: [] , 
        
    }


    add = (halo) => { 
        this.setState((state) =>( { 
             card :[...state.card, halo.name ]
        } )
            
        )
    }

    remove = (halo) => {
      this.setState((state) => { 
        const card  = [...state.card] 
        const findIndex = card.findIndex(p =>   p=== halo.name) ; 
        if(findIndex < 0){ 
            return ; 
        }

        card.splice(findIndex , 1) ; 

        return ( { 
            card , 
        })
      })
      

    
    }

    
   render() { 
    return (
    <div className="main"> 
    <div> 
        <div className="total" >{this.state.card.length}</div>
        { 
            Data2.map(halo => ( 
                <div className="wrapper">
                <div className={halo.name}>{halo.name}</div>
                 
                <div className={halo.favoritFood}>{halo.favoritFood}</div> 
                <button className="add" onClick={()=> this.add(halo)}>add</button> <button className="remove" onClick={()=> this.remove(halo)}>remove</button>
                </div>
            ))
        }
        x   
    </div>
    </div> )
   }

}