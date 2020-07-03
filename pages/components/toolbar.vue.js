Vue.component("spa-toolbar", {
  template: `
        <div>
            <v-toolbar dark color="primary" class="mb-2">
                <v-layout align-center>
                    <v-spacer></v-spacer>
                    <router-link to="/"><v-toolbar-title class="white--text">StoryBoard</v-toolbar-title></router-link>
                </v-layout>
            </v-toolbar>
            <v-navigation-drawer
                permanent
                expand-on-hover
                app
                >
                <v-list
                    nav
                    dense
                >
                    <v-list-item link to="/story">
                        <v-list-item-icon>
                            <v-icon>mdi-folder</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Story</v-list-item-title>
                    </v-list-item>
                    <v-list-item link to="/settings">
                        <v-list-item-icon>
                            <v-icon>mdi-star</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Settings</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </div>
`,
});
