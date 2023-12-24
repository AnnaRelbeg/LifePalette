new Vue({
    el: '#app',
    data: {
        currentView: 'home'
    },
    methods: {
        navigateTo: function(view) {
            this.currentView = view;
        }
    }
});
