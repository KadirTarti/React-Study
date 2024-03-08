import React from 'react'


//?==================================================================
//?                         LIFECYCLE METHODS
//?          https://reactjs.org/docs/react-component.html
//?
//?==================================================================

//* Lifecycle yöntemleri, DOM'daki süreleri boyunca componentler üzerinde çalışmak için kullanılan, React'te yerleşik özel yöntemlerdir.
//* Örneğin, bileşen bağlandığında, oluşturduğunda, güncellendiğinde veya bağlantısını kestiğinde.

//* Component in oluşturulması (constructor)
//* DOM ağacına ekleme. (componentDidMount)
//* Component in işlenmesi  (render)
//* (Optional) Componentin update edilmesi (componentDidUpdate)
//* componentin ölümü (DOM ağacından kaldırılıyor) (componentWillUnmount)


class LifeCycleMethods extends React.Component{

    //! 1- npm start denince ilk çalışan kısım burası. her comp oluşmasında çağırılır
    //^DOĞUM

    constructor(props){
        console.log('constructor is running');
        super(props)

        this.state={count:0, bilgiler: []}
    }

    arttir=()=>{ 
        this.setState({count:this.state.count+1})
    }





    //! 3-) component  monte edildiğinde çağrılır
  //! (ilk renderdan hemen sonra).(database den veri çekme vs...)
  //!  lifecycle döngüsünde yalnızca bir kez çağrılır
  //^  7-30 YAŞ  - gelişme
  componentDidMount(){
    //^* buraya api den veri kodları yazılır
    console.log('component kuruldu')
  }
//& sıralamada üstteki önce gelmesine rağmen 3. sırada yazdırılıyor.


 //! 4-) bileşen güncellenir ve yeniden oluşturulur hemen sonrasında çağrılır.
  //!ayrıca yeni değiştirilen duruma veya props lara  bir kez erişebilir
  //^  30-63 YAŞ  - yaşlanma
  componentDidUpdate(){
    console.log('component update edildi');
  }
  //^* burası direk çalışmaz. Dom güncellendiğinde çalışır.




  //! 5- bileşen DOM dan kaldırılmadan önce çağırılır. ÖLME
  //^  ÖLÜM
  componentWillUnmount(){
    console.log('component öldü');
  }



    //! 2- her oluşturmada çağırılır.
    //^  0-6 YAŞ   - ilk büyüme

    render(){
        console.log('component rendered')
        return (
            <div className="container text-center p-3">
            <h1 className="text-danger">LIFECYCLE METHODS</h1>
            <h3>COUNT={this.state.count} </h3>
            <button className="btn btn-info" onClick={this.arttir}>
              INC
            </button>
          </div>
        )
    }








}

export default LifeCycleMethods