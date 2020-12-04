var app = new Vue (
    {
        el: '#root',
        data: {
            // logo HEADER
            logoHeader: 'images/avada-music-logo.png',
            // bottone primario
            buttonPrimary: 'latest album',
            // bottone secondario
            buttonSecondary: 'live dates',
            // primo link-button
            firstLinkButton: 'view all latest news',
            // secondo link-button
            secondLinkButton: 'view all live dates',
            // array delle voci di menu
            menuItems: [
                'Home',
                'Meet The Band',
                'Live Dates',
                'Latest News',
                'Albums',
                'Fans'
            ],
            // chiave per vedere o nascondere il menu
            isVisible: true,
            // array di oggetti dei lives
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
            ],
            // logo FOOTER
            logoFooter: 'images/logo_footer.png'
        },
        methods: {
            // funzione per aprire e chiudere il menu
            openCloseDropdownMenu() {
                this.isVisible = !this.isVisible;
            }
        },
        mounted() {
            this.lives.sort(function(a, b) {
                // uso toUppercase per non considerare maiuscole e minuscole
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                return -1;
                }
                if (nameA > nameB) {
                return 1;
                }
                // i nomi sono uguali
                return 0;
            });
        }
    }
);
