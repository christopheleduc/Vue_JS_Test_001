  new Vue({
    el: '#app-3',
    data: {
      value_test: '', value_test_01: '', value_test_02: '', active: false, checkedColor: false 

    }
  })

   new Vue({
     el: '#app-5',
     data: {
       show: false,
     }
   })

   var app6 = new Vue({
     el: '#app-6',
     data: {
       seen: true
     }
   })

   var app7 = new Vue({
     el: '#app-7',
     data: {
       todos: [
         { text: 'Apprendre JavaScript' },
         { text: 'Apprendre Vue' },
         { text: 'Créer quelque chose de génial' }
       ]
     }
   })