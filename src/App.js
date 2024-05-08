import { Component } from "react";

export default class App extends Component {
  render(){
    return(
      <main className="main-container">
        <div className="sub-container">
          <h1>장바구니</h1>
          <div style={{width:'100%', backgroundColor: 'white', padding: '1rem'}}>
            expense form
          </div>
          <div style={{width:'100%', backgroundColor: 'white', padding: '1rem'}}>
            expense list
          </div>
          <div style={{display:'flex', justifyContent: 'start', marginTop:'1rem'}}>
            <p style={{fontSize: '2rem'}}>
              총 합계:
            </p>
          </div>
        </div>
      </main>
    )
  }
}
