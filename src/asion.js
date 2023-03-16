import React from 'react';


import Nav from './Nav'
import data from './count.json';

class Asion extends React.Component {
    constructor() {
        super();
        this.state = {
          showPopup: false,
          mydata : data,
          edit:{
            name:"",
            population:"",
            region:'',
            capita:'',
            flags:{}
          }
        };
      }
      togglePopup() {
        const zer ={
            name:"",
            population:"",
            region:'',
            capita:'',
            flags:{}
          }
          this.setState({edit:zer})
        this.setState({
          showPopup: !this.state.showPopup
        });
      }

       myedit= (e, id) =>{
        
        this.setState({
            showPopup: !this.state.showPopup
          });
      }
     
    render() {
       
        return (
            <div>
                {this.state.showPopup ? 
            <Nav 
              text='Close Me'
              closePopup={this.togglePopup.bind(this)}
              myedits = {this.state.edit}
            />
            : null
          }
                {/* nav cards and tables */}
                <div class="flex flex-row space-x-40">
                    {/* nav */}

                    <aside class="flex flex-col w-64 px-4 py-8 overflow-y-auto bg-gray-500 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-500 dark:border-gray-700">
                        <p href="#" class="mx-auto">
                        </p>

                        <div class="flex flex-col items-center mt-6 -mx-2">
                            <img class="object-cover w-24 h-24 mx-2 rounded-full" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.npr.org%2Fsections%2Fgoatsandsoda%2F2014%2F07%2F10%2F330444128%2Fmaasai-warriors-caught-between-spears-and-cellphones&psig=AOvVaw0Kum4E-JlqrGVrf0-Loq5o&ust=1678249305091000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMi59ZT8yP0CFQAAAAAdAAAAABAF" alt="avatar" />
                            <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">Mukunzi John</h4>
                        </div>

                        <div class="flex flex-col justify-between flex-1 mt-6">
                            <nav class="flex flex-col space-y-4">
                                <button class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                    Dashboard
                                </button>
                                <Links  >
                                    <button onClick={this.togglePopup.bind(this)} class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                        insert
                                    </button>
                                </Links>
                                <Outlet />

                            </nav>
                        </div>
                    </aside>





                    {/* cards and table */}

                    <div class=" flex flex-col space-y-10">


                        {/* drop down */}
                        <div class=" absolute right-0">

                            <Link to="../">
                                <button class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                    log out
                                </button>
                            </Link>
                            <Outlet />
                        </div>

                        {/* carts */}


                        {/* routes */}



                        <div class="flex flex-row space-x-2">
                            <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                <p class="grid place-content-center font-bold text-9xl">1</p>

                                <div class="py-5 text-center">
                                    <p href="#" class="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">Mukunzi john</p>
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Senior manager</span>
                                </div>
                                <button class=" grid place-content-center px-6 py-2 font-medium tracking-wide  text-white capitalize transition-colors duration-3 bg-red-200 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 hover:shadow-red-500/50">
                                    edit acess
                                </button>
                            </div>



                            <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                <p class="grid place-content-center font-bold text-9xl">2</p>

                                <div class="py-5 text-center">
                                    <p class="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">Rutayisire Eric</p>
                                    <span class="text-sm text-gray-700 dark:text-gray-200">General manager</span>
                                </div>
                                <button class=" grid place-content-center px-6 py-2 font-medium tracking-wide  text-white capitalize transition-colors duration-300  bg-red-200 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 hover:shadow-red-500/50">
                                    edit acess
                                </button>
                            </div>



                            <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                <p class="grid place-content-center font-bold text-9xl">3</p>
                                <div class="py-5 text-center">
                                    <p class="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">Nzabakurikiza JMV</p>
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Stok manager</span>
                                </div>
                                <button class=" grid place-content-center px-6 py-2 font-medium tracking-wide  text-white capitalize transition-colors duration-300  bg-red-200 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 hover:shadow-red-500/50">
                                    edit acess
                                </button>
                            </div>

                        </div>

                        {/* 
table */}
                        <section class="container max-h-screen px-4">
                                <div class="flex flex-col mt-6 -my-2 sm:-mx-6 lg:-mx-8 overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg py-2 align-middle md:px-6 lg:px-8">
                                        
                                            <table class="h-64 divide-y divide-gray-200 dark:divide-gray-700">
                                                <thead class="bg-gray-50 dark:bg-gray-500">
                                                    <tr>
                                                        <th scope="col" class="py-3.5  text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <div class="flex items-center ">
                                                                <span>Country Name</span>
                                                            </div>
                                                        </th>

                                                        <th scope="col" class=" py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            Population
                                                        </th>

                                                        <th scope="col" class=" py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            Region
                                                        </th>

                                                        <th scope="col" class=" py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            Capital
                                                        </th>

                                                        <th scope="col" class=" py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            image
                                                        </th>

                                                        <th scope="col" class="relative py-3.5 px-4">
                                                            <span class="sr-only">Edit</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900 ">
                                                {this.state.mydata.map((nameObj)=>
                                                    <tr class="hover:bg-gray-300"  key= {nameObj.id}>
                                                        <td class="px-10 py-4 text-sm font-medium text-gray-700 ">
                                                            <div class="inline-flex items-center">

                                                                <div class="flex items-center ">


                                                                    <div >
                                                                        <h2 class="font-normal text-gray-800 dark:text-white ">{nameObj.name}</h2>  
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class=" py-4 text-sm font-normal text-gray-700 " >
                                                            <p className='edit'> {nameObj.population}</p>
                                                            <button  onClick={(e)=>this.myedit(e, nameObj)} className="mybutton" class="  place-content-center px-6 py-2 font-medium tracking-wide  text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 hover:shadow-red-500/50">
                                                                edit
                                                            </button>
                                                        </td>
                                                        <td class=" py-4 text-sm text-gray-500 dark:text-gray-300 "><p className='edit'>{nameObj.region}</p></td>
                                                        <td class=" py-4 text-sm text-gray-500 dark:text-gray-300 "><p className='edit'> {nameObj.capital}</p>
                                                            <button className="mybutton" class="  place-content-center px-6 py-2 font-medium tracking-wide  text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 hover:shadow-red-500/50">
                                                                Delete
                                                            </button>
                                                        </td>
                                                        <td class=" py-4 text-gray-500 dark:text-gray-300"><p className='edit'>{nameObj.flags.svg}</p></td>
                                                        <td class=" py-4 text-sm whitespace-nowrap">
                                                            <button class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                                            </button>
                                                        </td>
                                                    </tr> )}
                                                </tbody>
                                            </table>
                                        </div>

                            <div class="flex items-center justify-between mt-6">
                                <p href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                                    <span>
                                        previous
                                    </span>
                                </p>

                                <div class="items-center hidden md:flex gap-x-3">
                                    <p href="#" class="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</p>
                                    <p href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</p>
                                    <p href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</p>
                                    <p href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</p>
                                    <p href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</p>
                                    <p href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</p>
                                    <p href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</p>
                                </div>

                                <p href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                                    <span>
                                        Next
                                    </span>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>




            </div>
        )
    }
}

export default Asion