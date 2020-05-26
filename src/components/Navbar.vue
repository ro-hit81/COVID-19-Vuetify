<template>
    <nav>
        <v-app-bar flat app>

            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>
                <span class="font-weight-light grey--text">COVID-19</span>
                <span> Nepal</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn text color="primary" dark>
                <span>My site</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>

        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="navdraw">
            <v-list>
                <v-list-item router :to="nav_title.route">
                    <v-list-item-icon>
                        <v-icon class="white--text">mdi-{{ nav_title.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">
                            {{ nav_title.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider class="white"></v-divider>

                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-icon>
                        <v-icon class="white--text">mdi-{{link.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">
                            {{ link.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>

<script>
export default {
    data() {
        return{
            drawer: false,

            nav_title: {
                icon: 'view-dashboard',
                text: 'Dashboard',
                route: '/',
                show: true
            },

            links: [
                { icon: 'google-earth', text: 'Global Stats',   route: '/global' },
                { icon: 'folder',       text: 'Nepal Stats',    route: '/nepal' },
                { icon: 'map',          text: 'Maps',            route: '/maps' },
            ]
        }
    }
}
</script>