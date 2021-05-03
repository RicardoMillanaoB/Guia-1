


  const app = new Vue({
      el: '#formulario',
      data: {
          objetos:[],
          nombre_inp:'',
          descripcion_inp:'',
          precio_inp:'',
          moreChar: 'Operacion no valida',
          adv:'',
          boton: 'Agregar'
      },
      methods:{
          getFormValues(){
            if(this.nombre_inp.length > 3 && this.descripcion_inp.length > 3 && this.precio_inp>0){
                this.objetos.push({
                    nombre:this.nombre_inp,
                    descripcion:this.descripcion_inp,
                    precio: this.precio_inp
                });
                this.nombre_inp = '';
                this.descripcion_inp = '';
                this.precio_inp = '';
                this.adv = '';
                this.boton = 'Agregar'
            }else{
                this.adv = this.moreChar;
            }
          },
          deleteValues(index){
              this.editIndex = index;
              this.objetos.splice(index,1);
          },
          setValues(index){
            this.nombre_inp = this.objetos[index].nombre;
            this.descripcion_inp = this.objetos[index].descripcion;
            this.precio_inp = this.objetos[index].precio;
            this.deleteValues(index);
            this.boton = 'Editar';
    
          },
          updateValues(index){
              this.objetos[index].descripcion = this.isEdit;

          },
      }
  });
