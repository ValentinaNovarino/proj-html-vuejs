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
            isVisible: true,
            lives: [
                {
                    date: '17/08/2020',
                    name: 'gem festival',
                    place: 'anakalia, georgia'
                },
                {
                    date: '24/09/2020',
                    name: 'groovefest',
                    place: 'dominical republic'
                },
                {
                    date: '31/10/2020',
                    name: 'oasis festival -',
                    place: 'marrakech, marocco'
                },
                {
                    date: '7/11/2020',
                    name: 'moga festival -',
                    place: 'essaouria, marocco'
                },
                {
                    date: '10/12/2020',
                    name: 'envision festival -',
                    place: 'uvita, costa rica'
                }
            ]
        },
        methods: {
            openCloseDropdownMenu() {
                this.isVisible = !this.isVisible;
            }
        }
    }
);
