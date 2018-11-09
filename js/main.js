(() =>{
    //set up instance
const vm = new Vue({
    el : "#app",

   
    data :{
        targetURL : "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            message: "epic meme",

            vuemessage: " yay you can do something",

            anchorOff : true,
                
            Fruit : [
                {name: "apple", flavor: "tasty"},
                {name: "watermelon", flavor: "tasty good"},
                {name: "orange", flavor: "tasty orange"},
                {name: "peaches", flavor: "tasty crisp"}
            ],
                                                                                                    hazeVue: true

    },

    methods: {
        logFruit(e){
            console.log(e.currentTarget);
        }

    }
});
    const vm2 = new Vue({
            el : "#footer",

            data: {
                footerMesage: "yes"
            }
    });
    




})();