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

    //! 1- npm start denince ilk çalışan kısım burası. her comp oluşmasında çağırılır DOĞUM

    constructor(props){
        console.log('constructor is running');
        super(props)

        this.state={count:0}
    }

    //! 2- her oluşturmada çağırılır. BÜYÜME


}

export default LifeCycleMethods