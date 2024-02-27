//* ====================== CLASS COMPONENTS AND STATE ======================
//* React taki Class-Components  ES6 class yapısını temel alır.
//* çok fazla boilerplate code a sahipler.
//* fakat, state lere sahip olabilirler
//*  state component hakkında data veya bilgi içermek için kullanılan yerleşik bir React object tidir. component in durumu zamanla değişebilir ;
//* ne zaman değişse component re-render olur.
//* this.state ile constructor da state için bir initial value atayabiliriz. constructor  dışında, state i setState() metoduyla değiştirebiliriz,
//* =========================================================================

import {Component} from 'react'


class Counter extends Component{
    constructor(props){
        super(props)
        this.state={sayac:0, baslik:'Sayaç ile Events Konusu'}

    }

    arttir(){this.setState({sayac:this.state.sayac+1})}


    //! burada arrow func kullandığımız için return altında bind etmeye gerek kalmadı. (this.bind sildik)... halbuki arttırda this.bind yapmıştık 
    azalt =()=>{
        this.setState({sayac:this.state.sayac-1})
    }


    render(){
        return (
            <div className='container text-center mt-5'>
            <h1>{this.state.sayac}</h1>
            <h2>{this.state.baslik}</h2>

            <button onClick={this.arttir.bind(this)} className='btn btn-success'>INCREASE</button>

            <button onClick={this.azalt} className='btn btn-warning'>DECREASE</button>


            </div>
        )

    }

}

export default Counter