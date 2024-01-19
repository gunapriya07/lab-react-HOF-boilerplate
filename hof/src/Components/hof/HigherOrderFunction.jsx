import React, { Component } from 'react';

export class HigherOrderFunction extends Component {
    // Progression 1
    constructor(){
        super()
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }

    // Progression 2
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <div key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </div>
        ));
        return mapRows;
    };

    // Progression 3
    renderFilteredData = () => {
        const data = this.state.userData;
       return data.filter((user) => user.user_type == "Designer").map(function(item){
            return(
                <div key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </div>
            );
        })
    }

    // Progression 4
    renderUserWithJ = () =>{
        const data = this.state.userData;
        const filteredDataWithJ = data.filter((item)=>
            item.name.startsWith('J')
        )
        return  filteredDataWithJ.map((item) => 
                <div key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </div>
        )
    }

    // Progression 5
    renderByAge = () => {
        const data = this.state.userData;

        return data.filter((item) => item.age > 28 && item.age<=50)
       .map((item) => 
        (
            <div key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </div>
        ));
    }

    // Progression 6
    renderTotalExperience = () => {
        const data = this.state.userData;
        return data.filter((item) =>
            item.user_type == "Designer"
        ).reduce((total,current) =>
            total.years+current.years
        )
    }
    rend

  render() {
    return (
       <>
        <h1>Higher Order Function</h1>

       <div>
       <h2>Display all items</h2>
            <div className="display-box">
            <ul>{this.renderItems()} </ul>
            </div>
       </div>

       <div>
       <h2>Display based on user type</h2>
            <div className="display-box">
            <ul>{this.renderFilteredData()} </ul>
            </div>
       </div>
       <div>
       <h2> Filtered data starting with J</h2>
            <div className="display-box">
            <ul>{this.renderUserWithJ()} </ul>
            </div>
       </div>
       <div>
       <h2> Filtered data based on age</h2>
            <div className="display-box">
            <ul>{this.renderByAge()} </ul>
            </div>
       </div>
       <div>
       <h2>Total experience of the designers</h2>
            <div className="display-box">
            <ul>{this.renderTotalExperience()} </ul>
            </div>
       </div>
       
       </>
        
      
    );
  }
}

export default HigherOrderFunction;