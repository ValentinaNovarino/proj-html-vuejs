var app = new Vue (
    {
        el: '#root',
        data: {
            menuItems: [
                'Home',
                'Meet The Band',
                'Live Dates',
                'Latest News',
                'Albums',
                'Fans'
            ],
            showMenu: false,
        },
        methods: {
            showDropdownMenu() {
                this.showMenu = true;
            },
            closeDropdownMenu() {
                this.showMenu = false;
            }
        }
    }
);
