new Vue({
    el: '#app',
    data: {
        currentView: 'home',
        greetingMessage: '' // Data property to store the greeting message
    },
    methods: {
        navigateTo: function(view, event) {
            event.preventDefault();
            this.currentView = view;
        },
        welcomeMessage: function() {
            const now = new Date();
            const hours = now.getHours();
            const dayOfWeek = now.getDay();

            let timeOfDay;
            if (hours < 12) {
                timeOfDay = 'morning';
            } else if (hours < 18) {
                timeOfDay = 'afternoon';
            } else {
                timeOfDay = 'evening';
            }

            let day;
            switch (dayOfWeek) {
                case 0: day = 'Sunday'; break;
                case 1: day = 'Monday'; break;
                case 2: day = 'Tuesday'; break;
                case 3: day = 'Wednesday'; break;
                case 4: day = 'Thursday'; break;
                case 5: day = 'Friday'; break;
                case 6: day = 'Saturday'; break;
            }

            // Update the greeting message
            this.greetingMessage = `Good ${timeOfDay}! Ready for the torturous review? Happy ${day}!`;
        }
    },
    created: function() {
        this.welcomeMessage(); // Call the welcome message method when the Vue instance is created
    }
});
