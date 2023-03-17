import React from 'react'
class NavV extends React.Component {
  render() {
    return (
      <div>
        <div className='popup'>
          <div className='popup_inner'>
            <div className="pop">
              <div className=" p-6 flex flex-col shadow-md justify-center dark:(#ab892c)">
                <div className="font-bold  flex justify-center ">Disclaimer</div>
                <div className="  flex justify-center ">The National Bank of Rwanda does not enter data into this system and the values shown in this website are estimations, they may change depending on individual bank policies, risk evaluation including your individual risk profile. For more details and clarification, please contact the bank of your choice.
                </div>
                <div class="flex justify-end mt-6">
                <button onClick={this.props.closePopup} class="leading-5">I understand</button>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}


export default NavV